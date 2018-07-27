const { Given } = require('cucumber');
const assert = require('assert')

Given('I go to the xpa exchange homepage',() => {
    browser.url('./');
        title = browser.getTitle();
        assert.equal(title, 'xpaexchange');
})