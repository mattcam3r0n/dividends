import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: 'black',
  },
  appName: {
    marginRight: 32
  },
});

class Header extends React.Component {
  state = {
  };

  render() {
    const { classes } = this.props;
    return (
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar variant="dense">
          <Typography variant="title" color="inherit" noWrap className={classes.appName}>
            Dividends
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
