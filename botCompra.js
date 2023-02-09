const {Builder, By, Key, until, Options} = require('selenium-webdriver');
require("chromedriver")


/*String_proxyAPICall = "http://pubproxy.com/api/proxy?format=txt"
if (driver.findElementsByTagName("pre").size() > 0) {
pubProxy = driver.findElementByXPath("/html/body/pre").getText();
// set the proxy
options = new ChromeOptions().addArguments("--proxy-server=" + pubProxy);
System.out.println("proxy: ".concat(pubProxy));
}*/

async function bot(){
    let proxyAddress = '212.56.139.253:80';
    let option = new Chrome.Options().addArguments(`--proxy-server=http://${proxyAddress}`);

    let driver = await new Builder().forBrowser('chrome').build()
    .setChromeOptions(option)
    await driver.get('https://www.nike.cl/login');
    await driver.findElement(By.id('vtexIdContainer'));
    const entrar = await driver.findElement(By.id("vtexIdUI-custom-oauth"));
    console.log(await driver.getTitle())
    entrar.click();
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    const ventanas = await driver.getAllWindowHandles();
    console.log(ventanas);
    await driver.switchTo().window(ventanas[1]);
    await driver.wait(until.elementLocated(By.className('css-cv34zj e192pr2z0 nds-input-container')))

    console.log(await driver.getTitle())
    const correo = await driver.findElement(By.className('nds-input-text-field css-1yj75qi e1fiih290'))
    await correo.send_Keys("cr.hachim2.0@gmail.com")
    const boton_correo_aceptar = await driver.findElement(By.className('css-18y7846 btn-primary-dark  btn-md'));
    boton_correo_aceptar.click()
    await new Promise(resolve => setTimeout(resolve, 10000));
    await driver.quit();
}

bot();