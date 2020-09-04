import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
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
import Lesson1 from '../lessons/Lesson1'

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


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            
          </Typography>
          <Typography style={{flex:1}}>
              <Link className="bar-link" to={"/"}>
                <Button color="inherit">Home</Button>
              </Link>
            <Link className="bar-link" to={"/"}>
              <Button color="inherit">Edit Profile</Button>
            </Link>
            <Link className="bar-link" to={"/"}>
              <Button color="inherit">Logout</Button>
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
          <h3>Gender Inclusive Spanish</h3>
        </div>
        <Divider />
        <List style={{backgroundColor: "lightskyblue"}}>
          {['Lesson 1', 'Lesson 2', 'Lesson 3', 'Lesson 4', 'Lesson 5'].map((text, index) => (
            <Link className="menu-link" key={text} to={"/" + text.toLowerCase().replace(" ", "s/")}>
              <ListItem button  key={text}>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List style={{backgroundColor: "lightskyblue"}}>
          {['Lesson 6', 'Lesson 7', 'Lesson 8', 'Lesson 9', 'Lesson 10'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content} style={{backgroundColor: "#a9a9a9"}}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/lessons/1">
            <Lesson1 />
          </Route>
          <Route exact path="/">
            <Profile />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
