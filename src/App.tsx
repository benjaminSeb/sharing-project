import React from 'react';
import logo from './logo.svg';
import './App.css';
import LongMenu from './Menu';
import { Button, Grid, Icon, TextField, AppBar, Toolbar, IconButton, Typography, InputBase, Paper, makeStyles } from '@material-ui/core';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import classes from '*.module.css';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    backgroundColor: "blueviolet"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Grid className="App-grid" container direction="column" alignItems="center" justify="space-between">
        <Grid className="App-header-grid" container direction="row" justify="center">
          {/* <AppBar position="static"> */}
            <Toolbar>
              <IconButton edge="start" className="Toolbar-menu-button" color="primary" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className="Toolbar-site-title">
                SiteName
              </Typography>
              <div className="Toolbar-search">
                <SearchIcon />
                <InputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
              <Button variant="contained" color="primary">Se Connecter</Button>
            </Toolbar>
        </Grid>
        <Grid className="App-center-grid" container direction="row" justify="flex-end">
          <Button className="App-center-about" variant="text">About</Button>
        </Grid>
        <Grid className="App-bottom-grid" container direction="row" justify="center">
          <Paper className={classes.paper} />
          <Paper className="bottom-paper" />
          <Paper className="bottom-paper" />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
