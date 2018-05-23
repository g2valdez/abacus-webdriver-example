module.exports = ({Given, When, Then, And, But}) => {
  Given(/^user goes to "(.*)"$/, async (url) => {
    return driver.get(url);
  });

  Then(/^the top search result is for "(.*)"$/, async (expectedResult) => {
    pageMap['Google Search Results'].validateTopResult(expectedResult);
  });
};
