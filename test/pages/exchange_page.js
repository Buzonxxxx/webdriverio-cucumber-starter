const Page = require('./page')

class ExchangePage extends Page {

  get tideWalletConnect() { return browser.element('.unique > span')}

}

module.exports = new ExchangePage()