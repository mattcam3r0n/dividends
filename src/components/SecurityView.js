import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import DividendChart from './DividendChart';

const styles = (theme) => ({
  paper: {
    margin: 15,
  },
});

@inject('appState', 'portfolioStore')
@observer
class SecurityView extends Component {
  state = {};

  componentDidMount() {
    const { portfolioStore } = this.props;

    portfolioStore.getDividendHistory(['MSFT']).then(data => {
        this.setState({
                holdings: data['MSFT']
            });
    });
    //portfolioStore.getDividendHistory(holdings.map(h => h.symbol));
  }

  render() {
    const { classes } = this.props;
    const { holdings = [] } = this.state;
    return (
      <Paper className={classes.paper}>
        <DividendChart />
      </Paper>
    );
  }
}

export default withStyles(styles)(SecurityView);
