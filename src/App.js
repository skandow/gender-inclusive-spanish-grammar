import React, { Component } from 'react';
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import LoginContainer from './components/containers/LoginContainer';
import ProfileContainer from './components/containers/ProfileContainer';
import Login from './components/login/Login';
import SignUp from './components/login/SignUp';
import { loginUser } from './actions/user.js'
import { saveQuizScores } from './actions/quizScores.js'

class App extends Component {
  state = {
    redirect: null
  }

  componentDidMount() {
    const token = localStorage.getItem("token")
    if (!token) {
      this.setState({
        redirect: '/login',
        showFooter: true
    })} else {
      const reqObj = {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
      fetch('https://git.heroku.com/inclusive-spanish-grammar-serv.git/api/v1/profile', reqObj)
      .then(resp => {
          return resp.json()})
      .then(data => {
        this.props.loginUser(data.user.data.attributes)
        this.props.saveQuizScores(data.user.data.attributes.quiz_scores)
    })
  }
}

  render() {
    console.log("at App", this.props.user)
  return (
    <Router>
    <div className="App">
      {!this.props.user ?
      <header className="App-header">
          Gender Inclusive Spanish Grammar Lessons
      </header>
      :
      null}
        {localStorage.getItem("token") ? 
        <div>
          <ProfileContainer />
        </div>
        :
        <div>
        <LoginContainer />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign_up" component={SignUp} />
        </div>
        } 
    </div>
    </Router>
  )};
}

const mapStateToProps = state => {
  return {user: state.user}
}

const mapDispatchToProps = {
  loginUser,
  saveQuizScores
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
