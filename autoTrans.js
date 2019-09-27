const {Builder, By, Key, until} = require('selenium-webdriver');

(async () => {
  let driver = await new Builder()
  .forBrowser('internet explorer')
  .usingServer('http://localhost:4444/wd/hub')
  .build();
  await driver.manage().window().maximize();
  await driver.get('http://www.google.com');
  await driver.findElement(By.name('q')).sendKeys('アデリーペンギン', Key.RETURN);
})();
//https://qiita.com/LeftLetter/items/615d910c24b3caf3d09f

