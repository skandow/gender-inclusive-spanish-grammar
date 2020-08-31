import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import LoginContainer from './components/containers/LoginContainer';
import ProfileContainer from './components/containers/ProfileContainer';
import Login from './components/login/Login';
import SignUp from './components/login/SignUp';
import DrawerMenu from './components/profile/DrawerMenu'
import { useSelector } from 'react-redux'

function App() {
  const user = useSelector(state => state.user)

  return (
    <Router>
    <div className="App">
      <header className="App-header">
          
      </header>
        {user ? 
        <div>
          <ProfileContainer />
          <Route exact path="/home" component={DrawerMenu} />
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
  );
}

export default App;
