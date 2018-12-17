import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import Header from "./components/Header";

const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
  overrides: {
    root: {
    },
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

function ClippedDrawer(props) {
  const { classes } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <Header />
      </div>
    </MuiThemeProvider>
  );
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClippedDrawer);
