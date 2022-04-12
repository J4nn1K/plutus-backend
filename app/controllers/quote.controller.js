const axios = require('axios');
const keyConfig = require("../config/key.config.js");

exports.get = (req, res) => {
    // Validate request
    if (!req.params.identification) {
        res.status(400).send({
            message: "Identification can not be empty!"
        });
        return;
    }
    const identification = req.params.identification

    // CoinMarketCap request for cryptocurrencies
    let response = null;
    // create promise
    const promise = new Promise(async (resolve, reject) => {
        try {
            response = await axios.get('https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest', {
                headers: {
                    'X-CMC_PRO_API_KEY': keyConfig.CMC_PRO_API_KEY,
                },
                params: {
                    'symbol': identification,
                    'convert': "EUR",
                }
            });
        } catch (ex) {
            response = null;
            // error
            console.log(ex);
            reject(ex);
        }
        if (response) {
            // success
            const json = response.data;
            // console.log(json);
            resolve(json);
        }
    });

    // consume promise
    promise.then(value => {
        timestamp = value.status.timestamp
        symbol = value.data[identification][0].symbol
        quote = value.data[identification][0].quote.EUR
        res.send({
            timestamp: timestamp,
            symbol: symbol,
            price: quote.price,
            percent_change_24h: quote.percent_change_24h,
            percent_change_7d: quote.percent_change_7d,
            percent_change_30d: quote.percent_change_30d,
            percent_change_60d: quote.percent_change_60d,
            percent_change_90d: quote.percent_change_90d,
        })
    }); 
};