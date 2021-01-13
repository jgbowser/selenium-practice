const { expect } = require("chai");
const { done } = require('mocha');
const { Builder, By, Key, until } = require('selenium-webdriver');

describe('test test', () => {
  it('1+1=2', () => {
    const result = 2;
    expect(1 + 1).to.eql(result);
  })
})

describe('Selenium google title test', () => {
  const driver = new Builder().forBrowser('firefox').build();

  it('should navigate to Google and find the page title', async () => {
    await driver.get('http://google.com');
    const title = await driver.getTitle();
    expect(title).to.eql('Google');
  });

  after(async () => await driver.quit());
});

describe('Selenium google search input', () => {
  const driver = new Builder().forBrowser('firefox').build();

  it('should navigate to google and insert a search term', async () => {
    await driver.get('http://google.com');
    const search = await driver.findElement(By.name('q'))
    await search.sendKeys('Hello');
    const searchText = await search.getAttribute('value');

    expect(searchText).to.eql('Hello');
  });

  after(async () => driver.quit());
});

describe('find my personal website', () => {
  const driver = new Builder().forBrowser('firefox').build();

  it('should find my portfolio and get the title', async () => {
    await driver.get('http://google.com');
    await driver.findElement(By.name('q')).sendKeys('johnbowser.dev', Key.ENTER);
    await driver.wait(until.elementLocated(By.id('search')));
    await driver.findElement(By.partialLinkText('John Bowser - Full Stack Developer')).click();
    const title = await driver.getTitle();

    expect(title).to.eql('John Bowser - Full Stack Developer');
  });

  after(async () => driver.quit());
})