import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../actions/user.js';
import { useSelector } from 'react-redux';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
      
//         Gender Inclusive Spanish Grammar
//       {' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function EditProfile() {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();
  const classes = useStyles();
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email)
  const [preferredPronouns, setPreferredPronouns] = useState(user.preferred_pronouns)
  const [showInput, setShowInput] = useState(false)
  const [errorMessage, setErrorMessage] = useState('');
  const [redirect, setRedirect] = useState('')

  const handleSubmit = event => {
    event.preventDefault();
    const token = localStorage.getItem("token")
    if ((username) && (email) && (preferredPronouns)) {
    const payload = { user: {
        username: username,
        email: email,
        preferred_pronouns: preferredPronouns
    }}
    const reqObj = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
    }

    fetch(`http://localhost:3001/api/v1/users/${user.id}`, reqObj)
    .then(resp => {
      if(resp.status === 406) {
      throw Error("Username must be unique")
      } else {
      setRedirect("/home")
      return resp.json()
  }
  })
    .then(data => {
      dispatch(loginUser(data.data.attributes))
   
    }).catch(error => {
      setErrorMessage(error.message)
  })}
  else {
    setErrorMessage('No fields can be left blank')
  }
  } 

  const handleChange = e => {
      if (e.target.value === "My pronouns aren't listed") {
            setPreferredPronouns('');
            setShowInput(true)
       } else {
           setPreferredPronouns(e.target.value); 
           setShowInput(false);
       }
  }

  if (redirect) {
    return <Redirect to={redirect} />
  }

  return (
    <div className="edit=form">
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Please Enter Your Information Below to Sign Up
        </Typography>
        {errorMessage ? <Typography component="h2" variant="h6">
        <div style={{color: "#b81140", width: "100%"}}>{errorMessage}</div>
        </Typography> : null}
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            color="secondary"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            value={username}
            onInput={e=>setUsername(e.target.value)}
            autoFocus
          />
          <TextField
            variant="outlined"
            color="secondary"
            margin="normal"
            required
            fullWidth
            name="email"
            value={email}
            onInput={e=>setEmail(e.target.value)}
            label="Email Address"
            id="email"
          />
          <FormControl className={classes.margin}>
        <InputLabel htmlFor="demo-customized-select-native">Preferred Pronouns</InputLabel>
            <NativeSelect
          id="demo-customized-select-native"
          value={preferredPronouns}
          onChange={handleChange}
            >
          <option aria-label="None" value="" />
          <option value={"he, his, him, himself"}>he, his, him, himself</option>
          <option value={"she, hers, her, herself"}>she, hers, her, herself</option>
          <option value={"they, theirs, them, themselves"}>they, theirs, them, themselves</option>
          <option value={"My pronouns aren't listed"}>My pronouns aren't listed.</option>
        </NativeSelect>
        </FormControl>
        {showInput ? <TextField
            variant="outlined"
            color="secondary"
            margin="normal"
            fullWidth
            id="preferred-pronouns"
            label="Your preferred pronouns"
            name="preferred-pronouns"
            value={preferredPronouns}
            onInput={e=>setPreferredPronouns(e.target.value)}
            autoFocus
          />:null}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Edit Your Profile
          </Button>
            
        </form>
      </div>
      <Box mt={8}>
        {/* <Copyright /> */}
      </Box>
    </Container>
    </div>
  );
}