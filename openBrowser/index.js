var webdriver=require('selenium-webdriver'),
    chrome= require('selenium-webdriver/chrome'),
    By=webdriver.By,
    nutil=webdriver.nutil;
var lotteryList=[{"LotteryCode":"gsk3","LotteryName":"甘肃快三","LotteryKind":"K3"},{"LotteryCode":"jlk3","LotteryName":"吉林快三","LotteryKind":"K3"},{"LotteryCode":"nmgk3","LotteryName":"内蒙古快三","LotteryKind":"K3"},{"LotteryCode":"quickk3","LotteryName":"极速快三","LotteryKind":"K3"},{"LotteryCode":"tenk3","LotteryName":"十分快三","LotteryKind":"K3"},{"LotteryCode":"threek3","LotteryName":"三分快三","LotteryKind":"K3"},{"LotteryCode":"ttk3","LotteryName":"皇冠快三","LotteryKind":"K3"},{"LotteryCode":"bjpc28","LotteryName":"北京PC28","LotteryKind":"PC28"},{"LotteryCode":"quickpc28","LotteryName":"极速PC蛋蛋","LotteryKind":"PC28"},{"LotteryCode":"threepc28","LotteryName":"三分PC蛋蛋","LotteryKind":"PC28"},{"LotteryCode":"bjpk10","LotteryName":"北京赛车","LotteryKind":"PK10"},{"LotteryCode":"crownpk10","LotteryName":"皇冠赛车","LotteryKind":"PK10"},{"LotteryCode":"mlaft","LotteryName":"马耳他幸运飞艇","LotteryKind":"PK10"},{"LotteryCode":"tenpk10","LotteryName":"十分赛车","LotteryKind":"PK10"},{"LotteryCode":"threepk10","LotteryName":"三分赛车","LotteryKind":"PK10"},{"LotteryCode":"ttpk10","LotteryName":"极速赛车","LotteryKind":"PK10"},{"LotteryCode":"cqssc","LotteryName":"重庆时时彩","LotteryKind":"SSC"},{"LotteryCode":"jlssc","LotteryName":"吉林时时彩","LotteryKind":"SSC"},{"LotteryCode":"quickssc","LotteryName":"极速时时彩","LotteryKind":"SSC"},{"LotteryCode":"tenssc","LotteryName":"十分时时彩","LotteryKind":"SSC"},{"LotteryCode":"threessc","LotteryName":"三分时时彩","LotteryKind":"SSC"},{"LotteryCode":"ttssc","LotteryName":"皇冠时时彩","LotteryKind":"SSC"},{"LotteryCode":"crownx11x5","LotteryName":"皇冠11选5","LotteryKind":"X11X5"},{"LotteryCode":"gd11x5","LotteryName":"广东11选5","LotteryKind":"X11X5"},{"LotteryCode":"jl11x5","LotteryName":"吉林11选5","LotteryKind":"X11X5"},{"LotteryCode":"quickx11x5","LotteryName":"极速11选5","LotteryKind":"X11X5"},{"LotteryCode":"sxl11x5","LotteryName":"陕西11选5","LotteryKind":"X11X5"},{"LotteryCode":"tenx11x5","LotteryName":"十分11选5","LotteryKind":"X11X5"},{"LotteryCode":"threex11x5","LotteryName":"三分11选5","LotteryKind":"X11X5"}]
var netWorkList=["c1s1.d1d3013","c2s1.d1d3013","c5s1.c1c2930","c6s1.c1c2930"];//,"c5s1.c1c2930","c6s1.c1c2930"
var urltemplete='https://{0}.com/Enter/LaunchGame?token=qMcZcLUzapTQZs2SUgBoCE5V9Dc97f2BkshY9Fgby%2bxW2ZsoQE0cvGjiz7uuyxibhHsVstQz2cHxfWasX4GE7A%3d%3d&mobile=False&lotterycode={1}'
//var urltemplete='https://{0}.com/Enter/LaunchGame?token=qMcZcLUzapTQZs2SUgBoCE5V9Dc97f2BkshY9Fgby%2bxW2ZsoQE0cvGjiz7uuyxibhHsVstQz2cHxfWasX4GE7A%3d%3d&mobile=False&lotterycode={1}'
var wwidth=510;
var wheight=180;
var xlimit=4;
var ylimit=8;
var maxlimit=40
var currentX=0;
var currentY=0;

var driver=new webdriver.Builder()
.forBrowser('chrome')
.build();
driver.get(createUrl("c1s1.d1d3013","cqssc"));
//driver.manage().window().setRect({width:wwidth, height:wheight, x:0, y:0});

var widx=0;
var lidx=0;
for(var idx=0;idx<xlimit;idx++){//4條線路 一個畫面4行
  for(var idy=0;idy<ylimit;idy++){//一行8個 視窗
    var netID=netWorkList[idx];//一行一線路
    var lotteryCode=lotteryList[lidx].LotteryCode;
    var url=createUrl(netID,lotteryCode);
    var wname="w_"+widx;
    openBrowser(url,wname);
    widx++;
    lidx++;
    if(lidx>=lotteryList.length)lidx=0;
  }
}
/*
for(var idx=0;idx<netWorkList.length;idx++){//4條線路
  for(var idy=0;idy<lotteryList.length;idy++){
    var netID=netWorkList[idx];
    var lotteryCode=lotteryList[idy].LotteryCode;
    var url=createUrl(netID,lotteryCode);
    var wname="w_"+widx;
    openBrowser(url,wname);
    widx++;
  }  
}
*/

var fCpuntLimit=4;
var fCount=0;

setFocus();

var fInterval=setInterval(setFocus, 15000);


function setFocus(){
  for(var idx=widx-1;idx>=0;idx--){
    var wname="w_"+idx;
    driver.switchTo().window(wname);
  }
  fCount++;
  if(fCount>=fCpuntLimit)clearInterval(fInterval);
}

function createUrl(netID,lotteryCode){
  var url=urltemplete.replace(/\{0\}/g, netID);
  url=url.replace(/\{1\}/g, lotteryCode);
  return url;
}


function openBrowser(url,wname){
  /*var options   = new chrome.Options();
  options.addArguments('headless'); // note: without dashes
  */

  var _x=(wwidth*0.6)*(currentX);
  var _y=(wheight*0.54)*(currentY);
  //var jsOpenNewWindow ="window.open('"+url+"', '_blank', height='"+wheight+"',width='"+wwidth+"', top='"+_x+"', left='"+_y+"');";
  //var jsOpenNewWindow ="window.open('','','width=480,height=280');";
  var jsOpenNewWindow ="window.open('"+url+"','"+wname+"','width="+wwidth+",height="+wheight+",top="+_y+",left="+_x+"');";
  //var jsOpenNewWindow ="window.open('"+url+"', '', height='"+wheight+"',width='"+wwidth+"', top='"+_x+"', left='"+_y+"');";
  driver.executeScript(jsOpenNewWindow);

  //window.open('','','width=200,height=100');
    
  console.log("_x:"+_x+" _y:"+_y+" wwidth:"+wwidth+" wheight:"+wheight);
  //driver.manage().window().setRect({width:wwidth, height:wheight, x:_x, y:_y});
    
  if(currentY<(ylimit-1)){
    currentY++;
  }else{
    currentY=0;
    currentX++;
  }
}

