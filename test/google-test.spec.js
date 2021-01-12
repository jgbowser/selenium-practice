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

  let driver;

  beforeEach('set up browser', (done) => {
    driver = new Builder().forBrowser('firefox').build();
    done();
  });

  afterEach('kill browser', (done) => {
    driver.quit();
    done();
  })

  it('correctly navigates to google and retrieves the page title', async (done) => {
    await driver.get('http://google.com');
    const title = await driver.getTitle()
    expect(() => {
      title === 'Google'
    });
  });
})