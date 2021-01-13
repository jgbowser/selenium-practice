const { expect } = require("chai");
const { done } = require('mocha');
const { Builder } = require('selenium-webdriver');

describe('test test', () => {
  it('1+1=2', () => {
    const result = 2;
    expect(1 + 1).to.eql(result);
  })
})

describe('Selenium google title test', () => {
  const driver = new Builder().forBrowser('firefox').build();

  it('should navigate to Google and find the page title', async () => {
    await (await driver).get('http://google.com');
    const title = await driver.getTitle();
    console.log(title);
    expect(title).to.eql('Google');
  });

  after(async () => {
    await driver.quit()
  });
});