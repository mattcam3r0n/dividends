import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import HoldingsTable from './HoldingsTable';

const styles = (theme) => ({
    paper: {
        margin: 15
    }
});

@inject('appState', 'portfolioStore')
@observer
class PortfolioView extends Component {
  state = {
      holdings: []
  };

  componentDidMount() {
    const { portfolioStore } = this.props;

    portfolioStore.getHoldings().then((holdings) => {
        this.setState({
            holdings: holdings
        });
        //portfolioStore.getDividendHistory(holdings.map(h => h.symbol));
    });
  }

  render() {
    const { classes } = this.props;
    const { holdings = [] } = this.state;
    return (
        <Paper className={classes.paper}>
          <HoldingsTable holdings={holdings} />
        </Paper>
    );
  }
}

export default withStyles(styles)(PortfolioView);
