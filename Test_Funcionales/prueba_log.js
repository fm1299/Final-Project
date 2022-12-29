const { Builder, Key, By } = require('selenium-webdriver');
const assert = require('assert');

async function logaritmo_correcto() {
    let driver = await new Builder().forBrowser('chrome').build()
    await driver.get('file:///C:/Users/ubert/OneDrive/Documentos/Uberto/UNSA/3er/2do_semestre/Ingenieria_de_Software_II/practica3_ISII_rama1-main/practica3_ISII_rama1-main/Pruebas_trabajo/index.html');
    await driver.findElement(By.id('a')).sendKeys("8", Key.RETURN)
    await driver.findElement(By.id('b')).sendKeys("2", Key.RETURN)
    await driver.findElement(By.xpath('/html/body/div/input[16]')).click()
    await driver.findElement(By.xpath('/html/body/div/input[20]')).click()
    let respuesta = await driver.findElement(By.id('resultado')).getAttribute("value")
    assert.strictEqual("3", respuesta)
    await driver.quit();
}
async function logaritmo_decimal() {
    let driver = await new Builder().forBrowser("chrome").build()
    await driver.get('file:///C:/Users/ubert/OneDrive/Documentos/Uberto/UNSA/3er/2do_semestre/Ingenieria_de_Software_II/practica3_ISII_rama1-main/practica3_ISII_rama1-main/Pruebas_trabajo/index.html');
    await driver.findElement(By.id('a')).sendKeys("1.4", Key.RETURN)
    await driver.findElement(By.id('b')).sendKeys("2", Key.RETURN)
    await driver.findElement(By.xpath('/html/body/div/input[16]')).click()
    await driver.findElement(By.xpath('/html/body/div/input[20]')).click()
    let respuesta = await driver.findElement(By.id('resultado')).getAttribute("value")
    assert.strictEqual("0.4854", respuesta)
    await driver.quit();
}
async function logaritmo_negativo() {
    let driver = await new Builder().forBrowser("chrome").build()
    await driver.get('file:///C:/Users/ubert/OneDrive/Documentos/Uberto/UNSA/3er/2do_semestre/Ingenieria_de_Software_II/practica3_ISII_rama1-main/practica3_ISII_rama1-main/Pruebas_trabajo/index.html');
    await driver.findElement(By.id('a')).sendKeys("-8", Key.RETURN)
    await driver.findElement(By.id('b')).sendKeys("2", Key.RETURN)
    await driver.findElement(By.xpath('/html/body/div/input[16]')).click()
    await driver.findElement(By.xpath('/html/body/div/input[20]')).click()
    let alerta = await driver.switchTo().alert().getText()
    assert.strictEqual(alerta, "Argumentos negativos")
    await driver.quit();
}
logaritmo_correcto()
logaritmo_decimal()
logaritmo_negativo()