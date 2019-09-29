const {Builder, By, Key, until} = require('selenium-webdriver');
function log(msg){
console.log (msg);
}
(async () => {
  let driver = await new Builder()
  .forBrowser('internet explorer')
  .usingServer('http://localhost:4444/wd/hub')
  .build();
  await driver.manage().window().maximize();
  await driver.get('https://ibsbjstar.ccb.com.cn/CCBIS/V6/common/login.jsp');
  await driver.sleep(2000);
  await driver.findElement(By.linkText("http://privatebank.ccb.com")).click();


  await driver.switchTo().frame(By.id('fQRLGIN')).catch((e)=>log(e));
  await driver.findElement(By.id('USERIDPL')).sendKeys('leo5899').catch((e)=>log(e));
  await driver.findElement(By.id('LOGPASS')).sendKeys('fjp598899');
  await driver.findElement(By.id('loginButton')).click();

})();
//https://qiita.com/LeftLetter/items/615d910c24b3caf3d09f

