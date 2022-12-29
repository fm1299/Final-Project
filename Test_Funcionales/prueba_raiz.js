const {Builder,Key, By} = require('selenium-webdriver');
const assert = require('assert');

async function Raiz_cero() {
    let driver = await new Builder().forBrowser('chrome').build()
    await driver.get('file:///C:/Users/user/Downloads/CURSOS/Semestre VI/IS II/Final/Final-Project/Pruebas_trabajo/index.html');
    await driver.findElement(By.id('a')).sendKeys("0.0",Key.RETURN)
    await driver.findElement(By.xpath('/html/body/div/input[20]')).click()
    let respuesta = await driver.findElement(By.id('resultado')).getAttribute("value")
    assert.strictEqual("0",respuesta)
    await driver.quit();
}
async function Raiz_positivo() {
    let driver = await new Builder().forBrowser('chrome').build()
    await driver.get('file:///C:/Users/user/Downloads/CURSOS/Semestre VI/IS II/Final/Final-Project/Pruebas_trabajo/index.html');
    await driver.findElement(By.id('a')).sendKeys("16",Key.RETURN)
    await driver.findElement(By.xpath('/html/body/div/input[20]')).click()
    let respuesta = await driver.findElement(By.id('resultado')).getAttribute("value")
    assert.strictEqual("4",respuesta)
    await driver.quit();
}
async function Raiz_negativo() {
    let driver = await new Builder().forBrowser('chrome').build()
    await driver.get('file:///C:/Users/user/Downloads/CURSOS/Semestre VI/IS II/Final/Final-Project/Pruebas_trabajo/index.html');
    await driver.findElement(By.id('a')).sendKeys("-4",Key.RETURN)
    await driver.findElement(By.xpath('/html/body/div/input[20]')).click()
    let alerta = await driver.switchTo().alert().getText()
    assert.strictEqual(alerta, "No existe raiz para negativos")
    await driver.quit();
}
Raiz_cero()
Raiz_negativo()
Raiz_positivo()