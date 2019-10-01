const util = require('util');
const exec = util.promisify(require('child_process').exec);
const {Builder, By, Key, until} = require('selenium-webdriver');
function log(msg){
console.log (msg);
}

var escapeShell = function(cmd) {
  return cmd;
  return '"'+cmd.replace(/(["\s'$`\\])/g,'\\$1')+'"';
};
//profile.setPreference(“javascript.enabled”,false);
(async () => {

  
  

  let driver = await new Builder()
  .forBrowser('internet explorer')
  .usingServer('http://localhost:4444/wd/hub')
  .build();
  await driver.manage().window().maximize();
  await driver.get('https://ibsbjstar.ccb.com.cn/CCBIS/V6/common/login.jsp');
  /*
  await driver.wait(function() {
    return driver.getTitle().then(function(title) {
      return title === "中国建设银行个人网上银行";
    });
  }, 500000);
  */
 await driver.wait(function() {
  return driver.getCurrentUrl().then(function(currUrl) {
    return currUrl.indexOf("B2CMainPlat") >-1;
  });
}, 500000);
  await console.log("Logined!");
  await driver.sleep(5000);
  await driver.findElement(By.xpath("//a[text()='转账汇款']")).click().catch((e)=>log(e));
  await driver.sleep(2000);
  await driver.findElement(By.xpath("//a[text()='转账']")).click().catch((e)=>log(e));
  
  await driver.switchTo().frame(11).catch((e)=>log(e));
  
  //Xpath=//*[@type='text']//following::input[1]
  ////following-sibling::input[0]
  //"//span[text()='请输入收款人姓名']//following::input[1]"
  //"//input[starts-with(@id,'je')]"
  //await driver.findElement(By.xpath("html/body/a/img")).click();
  await driver.sleep(3000);
  
  //await driver.findElement(By.id('leftRelMenuBar')).click().catch((e)=>log(e));
  await driver.findElement(By.id('jhform')).click().catch((e)=>log(e));
  
  await driver.findElement(By.xpath("//input[starts-with(@id,'je')]")).sendKeys('陈智铭').catch((e)=>log(e));
  await driver.findElement(By.xpath("//input[starts-with(@id,'killa')]")).sendKeys('6216911304021889').catch((e)=>log(e));
  await driver.findElement(By.id('txtTranAmt')).sendKeys('0.01');
  await driver.findElement(By.id('subBut')).click();

  await driver.sleep(1000);
  await console.log("submit");
  await driver.findElement(By.xpath("//input[@type='submit']")).click();
  await console.log("call sikulix");
  const { stdout, stderr } = await exec(escapeShell('java -jar C:/\sikulix/\sikulix.jar -r simKey.py --args jk7998321')).catch((e)=>log(e));
  await console.log(stdout);

  await console.log("sikulix done");
  

})();


//https://qiita.com/LeftLetter/items/615d910c24b3caf3d09f

