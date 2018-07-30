const exchange = require('../pages/exchange_page')

const { When } = require('cucumber');
const assert = require('assert')

When('I log in TideWallet Connect',() => {
    exchange.tideWalletConnect.click()
    browser.pause(3000)
})

