const { PageObject } = require('abacus-webdriver');

module.exports = class extends PageObject {
  constructor() {
    super('Google home', 'google.com');

    // place web elements here
    this.SEARCH_BAR = element(by.id('lst-ib'));
    this.SEARCH = element(by.xpath('//input[@value="Google Search"]'));
  }

  // place page-specific function definitions here

};
