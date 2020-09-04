import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { NavLink } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../actions/user.js'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      
        Gender Inclusive Spanish Grammar
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
    margin: theme.spacing(3, 0, 2)
  },
}));

export default function Login() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [redirect, setRedirect] = useState('')

  const handleSubmit = event => {
    event.preventDefault();
    const payload = {
        username: username,
        password: password
    }
    const reqObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    }

    fetch("http://localhost:3001/api/v1/login", reqObj)
    .then(resp => {
      if(resp.status === 401) {
          throw Error("The username or password is incorrect")
      } else {
          setRedirect("/")
          return resp.json()
      }
      })
    .then(data => {
      localStorage.setItem("token", data.jwt);
      dispatch(loginUser(data.user.data.attributes))
  }).catch(error => {
    setErrorMessage(error.message)
})}

  if (redirect) {
    return <Redirect to={redirect} />
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Please Log In
        </Typography>
        {errorMessage ? <Typography component="h2" variant="h6">
        <div style={{color: "#b81140", width: "100%"}}>{errorMessage}</div>
        </Typography> : null}
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
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
            fullWidth
            name="password"
            value={password}
            onInput={e=>setPassword(e.target.value)}
            label="Password"
            type="password"
            id="password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit} 
          >
            Sign In
          </Button>
              <NavLink style={{margin: "auto"}} to="/sign_up" exact>
                Don't have an account? Sign Up
              </NavLink>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}