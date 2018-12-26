export default class Holding {
    symbol;
    shares;
    quote;

    constructor(symbol, shares, avgCost, quote) {
        this.symbol = symbol;
        this.shares = shares;
        this.avgCost = avgCost;
        this.quote = quote;
    }

    get price() {
        return this.quote.price;
    }

    get costBasis() {
        return this.avgCost * this.shares;
    }

    get gainLoss() {
        return this.marketValue - this.costBasis;
    }

    get marketValue() {
        return this.quote.price * this.shares;
    }

    get yield() {
        return this.quote.dividendRate / this.quote.price;
        // or this.annualIncome / this.marketValue;
    }

    get yieldOnCost() {
        return this.annualIncome / this.costBasis;
    }

    get annualIncome() {
        return this.quote.dividendRate * this.shares;
    }

}