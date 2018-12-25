import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import numeral from 'numeral';

const styles = (theme) => ({
    table: {}
});

const formatPct = (value) => numeral(value).format("0.00%");
const formatCurrency = (value) => numeral(value).format("0,0.00");
const formatShares = (value) => numeral(value).format("0.0");

const TableHeaderCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

class HoldingsTable extends React.Component {
    state = {  }
    render() {
        const { classes, holdings = [] } = this.props;
        return (
            <Table className={classes.table} aria-labelledby="tableTitle">
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Ticker</TableHeaderCell>
                        <TableHeaderCell align="right">Shares</TableHeaderCell>
                        <TableHeaderCell align="right">Price</TableHeaderCell>
                        <TableHeaderCell align="right">Cost Basis</TableHeaderCell>
                        <TableHeaderCell align="right">MV</TableHeaderCell>
                        <TableHeaderCell align="right">Gain/Loss</TableHeaderCell>
                        <TableHeaderCell align="right">Yield</TableHeaderCell>
                        <TableHeaderCell align="right">Annual Income</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {holdings.map((holding, i) => (
                        <TableRow key={i} hover>
                            <TableCell>{holding.symbol}</TableCell>
                            <TableCell align="right">{formatShares(holding.shares)}</TableCell>
                            <TableCell align="right">{formatCurrency(holding.price)}</TableCell>
                            <TableCell align="right">{formatCurrency(holding.costBasis)}</TableCell>
                            <TableCell align="right">{formatCurrency(holding.marketValue)}</TableCell>
                            <TableCell align="right">{formatCurrency(holding.gainLoss)}</TableCell>
                            <TableCell align="right">{formatPct(holding.yield)}</TableCell>
                            <TableCell align="right">{formatCurrency(holding.annualIncome)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        );
    }
}

export default withStyles(styles)(HoldingsTable);