export default class Holding {
    symbol;
    shares;
    quote;

    constructor(symbol, shares, quote) {
        this.symbol = symbol;
        this.shares = shares;
        this.quote = quote;
    }

    get price() {
        return this.quote.price;
    }

    get marketValue() {
        return this.quote.price * this.shares;
    }

    get yield() {
        return this.quote.dividendRate / this.quote.price;
    }


}