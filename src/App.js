import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
  overrides: {
    root: {},
  },
});

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    marginTop: 64,
    padding: 0, // theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
});

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;


function App(props) {
  const { classes } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className={classes.root}>
          <Header />
          <Sidebar />
          <main className={classes.content}>
            <Route path="/" exact component={Index} />
            <Route path="/about" exact component={About} />
          </main>
        </div>
      </Router>{' '}
    </MuiThemeProvider>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
