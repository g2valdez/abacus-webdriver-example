const { PageObject } = require('abacus-webdriver');

module.exports = class extends PageObject {
  constructor() {
    super('Google Search Results', 'google.com/search?');

    // place web elements here
    this.SEARCH_BAR = element(by.id('lst-ib'));
    this.SEARCH = element(by.xpath('//button[@value="Search"]'));
  }

  // place page-specific function definitions here
  async validateTopResult(expectedResult) {
    return expect(element(by.xpath('//div[@class="srg"]/div[1]/div/div/h3/a')).getText()).to.eventually.contain(expectedResult);
  }

};
