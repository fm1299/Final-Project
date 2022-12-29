const {Builder,Key, By} = require('selenium-webdriver');
const assert = require('assert');

async function Factorial_cero() {
    let driver = await new Builder().forBrowser('chrome').build()
    await driver.get('file:///C:/Users/ubert/OneDrive/Documentos/Uberto/UNSA/3er/2do_semestre/Ingenieria_de_Software_II/practica3_ISII_rama1-main/practica3_ISII_rama1-main/Pruebas_trabajo/index.html');
    await driver.findElement(By.id('a')).sendKeys("0.0",Key.RETURN)
    await driver.findElement(By.xpath('/html/body/div/input[22]')).click()
    await driver.findElement(By.xpath('/html/body/div/input[20]')).click()
    let respuesta = await driver.findElement(By.id('resultado')).getAttribute("value")
    assert.strictEqual("1",respuesta)
    await driver.quit();
}
async function Factorial_positivo() {
    let driver = await new Builder().forBrowser('chrome').build()
    await driver.get('file:///C:/Users/ubert/OneDrive/Documentos/Uberto/UNSA/3er/2do_semestre/Ingenieria_de_Software_II/practica3_ISII_rama1-main/practica3_ISII_rama1-main/Pruebas_trabajo/index.html');
    await driver.findElement(By.id('a')).sendKeys("5.0",Key.RETURN)
    await driver.findElement(By.xpath('/html/body/div/input[22]')).click()
    await driver.findElement(By.xpath('/html/body/div/input[20]')).click()
    let respuesta = await driver.findElement(By.id('resultado')).getAttribute("value")
    assert.strictEqual("120",respuesta)
    await driver.quit();
}
async function Factorial_negativo() {
    let driver = await new Builder().forBrowser('chrome').build()
    await driver.get('file:///C:/Users/ubert/OneDrive/Documentos/Uberto/UNSA/3er/2do_semestre/Ingenieria_de_Software_II/practica3_ISII_rama1-main/practica3_ISII_rama1-main/Pruebas_trabajo/index.html');
    await driver.findElement(By.id('a')).sendKeys("-5.0",Key.RETURN)
    await driver.findElement(By.xpath('/html/body/div/input[22]')).click()
    await driver.findElement(By.xpath('/html/body/div/input[20]')).click()
    let respuesta = await driver.findElement(By.id('resultado')).getAttribute("value")
    assert.strictEqual("-120",respuesta)
    await driver.quit();
}
Factorial_cero()
Factorial_negativo()
Factorial_positivo()