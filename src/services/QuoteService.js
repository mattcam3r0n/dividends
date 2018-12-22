import iex from 'node-iex';

// interact with IEX api
export default class QuoteService {
    
    getQuotes(symbolList) {
        const types = ["quote", "stats"];
        const range = "1m";
        const filter = null; 
        // TODO: Bug in node-iex causes incorrect URL when using filters.
        // Ignore for now but re-enable when bug is corrected (or fork and correct)
        //const filter = ["latestPrice", "change", "changePercent", "peRatio", "beta", "latestEPS"];

        // given a list of symbols, get quote info
        return iex.http.batch.market(symbolList, types, range, filter)
            .then(data => {
                const quotes = {};
                Object.keys(data).forEach((k) => {
                    const quote = data[k].quote;
                    const stats = data[k].stats;
                    quotes[k] = {
                        symbol: k,
                        price: quote.latestPrice,
                        change: quote.change,
                        changePercent: quote.changePercent,
                        peRatio: quote.peRatio,
                        beta: stats.beta,
                        latestEPS: stats.latestEPS,
                        dividendRate: stats.dividendRate
                    };
                });
                return quotes;
            });
        // return quotes (mapped by symbol?)
    }
}