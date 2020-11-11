import React from 'react';
import './App.css';
import { Button, Grid,  Toolbar, IconButton, Typography, InputBase, Paper, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(() => ({
  paper: {
    width: "25%",
    height: "10em",
    marginLeft: "1px",
    marginRight: "1px",
    backgroundColor: "blueviolet"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Grid className="App-grid" container direction="column" alignItems="center" justify="space-between">
        <Grid className="App-header-grid" container direction="row" justify="center">
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
          <Paper className={classes.paper} />
          <Paper className={classes.paper} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
