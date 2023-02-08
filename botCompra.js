const {Builder, By, Key, until} = require('selenium-webdriver');
require("chromedriver")

async function bot(){
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://www.nike.cl/login');
    await driver.findElement(By.id('vtexIdContainer'));
    const entrar = await driver.findElement(By.id("vtexIdUI-custom-oauth"));
    entrar.click();

    await driver.wait(until.elementLocated(By.className('css-cv34zj e192pr2z0 nds-input-container')))
    //const correo = await driver.findElement(By.id('username'))
    await driver.findElement(By.id('username')).sendKeys('cris_arredondo26@hotmail.com', Key.RETURN);
}

bot();