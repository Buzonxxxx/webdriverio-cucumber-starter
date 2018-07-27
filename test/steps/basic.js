const { Given } = require('cucumber');

Given('I go to the website abc',() => {
    browser.url("http://www.google.com");
});


// browser.url('https://xpa.exchange/#/exchange');
//         title = browser.getTitle();
//         assert.equal(title, 'xpaexchange');