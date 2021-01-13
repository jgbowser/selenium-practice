const { Builder, By, Key, until } = require('selenium-webdriver');

const driver = new Builder().forBrowser('firefox').build();

async function navToFcc() {
  try {
    await driver.get('http://google.com');
    await driver.findElement(By.name('q')).sendKeys('johnbowser.dev', Key.ENTER);
    await driver.wait(until.elementLocated(By.id('search')));
    await driver.findElement(By.partialLinkText('John Bowser - Full Stack Developer')).click()
    const title = await driver.getTitle();

    console.log(title);
  } catch(e) { console.log(e)}
  // finally {
  //   await driver.quit();
  // }

}

navToFcc();
