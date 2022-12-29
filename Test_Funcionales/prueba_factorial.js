const {Builder,Key, By} = require('selenium-webdriver');
const assert = require('assert');

async function Factorial_cero() {
    let driver = await new Builder().forBrowser('chrome').build()
    await driver.get('file:///C:/Users/HP/Documents/6 SEMESTRE/Ingeniería de software II/3 Unidad/Proyecto/practica3_ISII/Pruebas_trabajo/indexedDB.html');
    await driver.findElement(By.id('a')).sendKeys("0.0",Key.RETURN)
    await driver.findElement(By.xpath('/html/body/div/input[20]')).click()
    let respuesta = await driver.findElement(By.id('resultado')).getAttribute("value")
    assert.strictEqual("1",respuesta)
    await driver.quit();
}
async function Factorial_positivo() {
    let driver = await new Builder().forBrowser('chrome').build()
    await driver.get('file:///C:/Users/HP/Documents/6 SEMESTRE/Ingeniería de software II/3 Unidad/Proyecto/practica3_ISII/Pruebas_trabajo/indexedDB.html');
    await driver.findElement(By.id('a')).sendKeys("5.0",Key.RETURN)
    await driver.findElement(By.xpath('/html/body/div/input[20]')).click()
    let respuesta = await driver.findElement(By.id('resultado')).getAttribute("value")
    assert.strictEqual("120",respuesta)
    await driver.quit();
}
async function Factorial_negativo() {
    let driver = await new Builder().forBrowser('chrome').build()
    await driver.get('file:///C:/Users/HP/Documents/6 SEMESTRE/Ingeniería de software II/3 Unidad/Proyecto/practica3_ISII/Pruebas_trabajo/indexedDB.html');
    await driver.findElement(By.id('a')).sendKeys("-5.0",Key.RETURN)
    await driver.findElement(By.xpath('/html/body/div/input[20]')).click()
    let respuesta = await driver.findElement(By.id('resultado')).getAttribute("value")
    assert.strictEqual("-120",respuesta)
    await driver.quit();
}
Factorial_cero()
Factorial_negativo()
Factorial_positivo()