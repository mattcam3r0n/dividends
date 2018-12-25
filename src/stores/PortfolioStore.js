import { observable, computed, autorunAsync, action } from 'mobx';
import Holding from '../model/Holding';

export default class PortfolioStore {
  constructor(quoteService) {
    this.quoteService = quoteService;
  }

  getPortfolioList() {
    // return list of portfolios (no details?)
  }

  getPortfolio(id) {
    // return full portfolio
    return {
      name: 'Taxable Brokerage',
      holdings: [
        {
          symbol: 'MSFT',
          shares: 100,
          avgCost: 92,
        },
        {
          symbol: 'AAPL',
          shares: 100,
          avgCost: 95,
        },
        {
          symbol: 'T',
          shares: 100,
          avgCost: 28,
        },
      ],
    };
  }

  getHoldings(portfolioId) {
    // get portfolio holdings
    // get quotes for all securities
    // map quote info into holdings, calculate derived fields
    // return holdings
    const portfolio = this.getPortfolio(portfolioId);
    const symbols = portfolio.holdings.map((h) => h.symbol);
    return this.quoteService.getQuotes(symbols).then((quotes) => {
      return portfolio.holdings.map(
        (h) => new Holding(h.symbol, h.shares, h.avgCost, quotes[h.symbol])
      );
    });
  }
}
