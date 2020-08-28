import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import LoginContainer from './components/containers/LoginContainer'
import Login from './components/login/Login'
import SignUp from './components/login/SignUp'

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
          
      </header>
        <LoginContainer />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign_up" component={SignUp} />
    </div>
    </Router>
  );
}

export default App;
