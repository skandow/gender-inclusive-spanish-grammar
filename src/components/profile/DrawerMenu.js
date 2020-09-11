import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import ScrollToTop from '../higher_order/ScrollToTop'
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../actions/user.js';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Profile from './Profile'
import EditProfile from './EditProfile'
import Lesson1 from '../lessons/Lesson1'
import Lesson2 from '../lessons/Lesson2'
import Lesson3 from '../lessons/Lesson3'
import Lesson4 from '../lessons/Lesson4'
import Lesson5 from '../lessons/Lesson5'
import Lesson6 from '../lessons/Lesson6'
import Lesson7 from '../lessons/Lesson7'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: "#b81140",
    color: "white",
    flexGrow: 1
  },
  toolbarButtons: {
    marginLeft: 'auto'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function DrawerMenu() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    localStorage.removeItem('token');
    dispatch(logoutUser())
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            
          </Typography>
          <Typography style={{flex:1}}>
              <Link className="bar-link" to={"/home"}>
                <Button color="inherit">Home</Button>
              </Link>
            <Link className="bar-link" to={"/edit"}>
              <Button color="inherit">Edit Profile</Button>
            </Link>
            <Link className="bar-link" to={"/"}>
              <Button onClick={handleLogOut} color="inherit">Logout</Button>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} style={{color: "white", backgroundColor: "#b81140"}}>
          <h5 id="corner-label">Gender Inclusive Spanish</h5>
        </div>
        <Divider />
        <List style={{backgroundColor: "lightskyblue"}}>
          {['Lesson 1', 'Lesson 2', 'Lesson 3', 'Lesson 4'].map((text, index) => (
            <Link className="menu-link" key={text} to={"/" + text.toLowerCase().replace(" ", "s/")}>
              <ListItem button  key={text}>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List style={{backgroundColor: "lightskyblue"}}>
          {['Lesson 5', 'Lesson 6', 'Lesson 7', 'Lesson 8', 'Lesson 9', 'Lesson 10'].map((text, index) => (
            <Link className="menu-link" key={text} to={"/" + text.toLowerCase().replace(" ", "s/")}>
              <ListItem button  key={text}>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List style={{backgroundColor: "lightskyblue"}}>
          {['Lesson 11', 'Lesson 12', 'Lesson 13', 'Lesson 14', 'Lesson 15'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content} style={{backgroundColor: "#a9a9a9"}}>
        <div className={classes.toolbar} />
        <ScrollToTop>
        <Switch>
          <Route exact path="/lessons/1">
            <Lesson1 />
          </Route>
          <Route exact path="/lessons/2">
            <Lesson2 />
          </Route>
          <Route exact path="/lessons/3">
            <Lesson3 />
          </Route>
          <Route exact path="/lessons/4">
            <Lesson4 />
          </Route>
          <Route exact path="/lessons/5">
            <Lesson5 />
          </Route>
          <Route exact path="/lessons/6">
            <Lesson6 />
          </Route>
          <Route exact path="/lessons/7">
            <Lesson7 />
          </Route>
          <Route exact path="/home">
            <Profile />
          </Route>
          <Route exact path="/edit">
            <EditProfile />
          </Route>
        </Switch>
        </ScrollToTop>
      </main>
    </div>
  );
}
