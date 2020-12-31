import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { NavLink } from 'react-router-dom'
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../actions/user.js'
import { saveQuizScores } from '../../actions/quizScores.js';
import Copyright from '../containers/Copyright'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('')
  const [preferredPronouns, setPreferredPronouns] = useState('')
  const [showInput, setShowInput] = useState(false)
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if ((username) && (password) && (email) && (preferredPronouns)) {
    const payload = { user: {
        username: username,
        password: password,
        email: email,
        preferred_pronouns: preferredPronouns
    }}
    const reqObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    }

    fetch("https://git.heroku.com/inclusive-spanish-grammar-serv.git/api/v1/users", reqObj)
    .then(resp => {
      if(resp.status === 406) {
      throw Error("Username must be unique")
      } else {
      return resp.json()
  }
  })
    .then(data => {
      localStorage.setItem("token", data.jwt);
      dispatch(loginUser(data.user.data.attributes))
      dispatch(saveQuizScores(data.user.data.attributes.quiz_scores))
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

  return (
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
            margin="normal"
            required
            fullWidth
            name="password"
            value={password}
            onInput={e=>setPassword(e.target.value)}
            label="Password"
            type="password"
            id="password"
          />
          <TextField
            variant="outlined"
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
            color="secondary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <NavLink id="sign-up-link" style={{margin: "auto"}} to="/login" exact>
            Return to Log In
          </NavLink>
            
        </form>
      </div>
      <Copyright />
    </Container>
  );
}