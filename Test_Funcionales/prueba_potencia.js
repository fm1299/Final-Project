const {Builder,Key, By} = require('selenium-webdriver');
const assert = require('assert');

async function Exponente_correcto() {
    let driver = await new Builder().forBrowser('chrome').build()
    await driver.get('file:///C:/Users/ubert/OneDrive/Documentos/Uberto/UNSA/3er/2do_semestre/Ingenieria_de_Software_II/Pruebas_trabajo/index.html');
    await driver.findElement(By.id('a')).sendKeys("-8.0",Key.RETURN)
    await driver.findElement(By.id('b')).sendKeys("3.0",Key.RETURN)
    await driver.findElement(By.xpath('/html/body/div/input[20]')).click()
    await driver.findElement(By.xpath('/html/body/div/input[16]')).click()
    let respuesta = await driver.findElement(By.id('resultado')).getAttribute("value")
    assert.strictEqual("-512",respuesta)
    await driver.quit();
}
async function Exponente_decimal() {
    let driver = await new Builder().forBrowser("chrome").build()
    await driver.get('file:///C:/Users/ubert/OneDrive/Documentos/Uberto/UNSA/3er/2do_semestre/Ingenieria_de_Software_II/Pruebas_trabajo/index.html');
    await driver.findElement(By.id('a')).sendKeys("-8.0",Key.RETURN)
    await driver.findElement(By.id('b')).sendKeys("3.5",Key.RETURN)
    await driver.findElement(By.xpath('/html/body/div/input[20]')).click()
    await driver.findElement(By.xpath('/html/body/div/input[16]')).click()
    let alerta = await driver.switchTo().alert().getText()
    assert.strictEqual(alerta,"El exponente no puede ser decimal")
    await driver.quit();
}
async function Exponente_negativo() {
    let driver = await new Builder().forBrowser("chrome").build()
    await driver.get('file:///C:/Users/ubert/OneDrive/Documentos/Uberto/UNSA/3er/2do_semestre/Ingenieria_de_Software_II/Pruebas_trabajo/index.html');
    await driver.findElement(By.id('a')).sendKeys("8.0",Key.RETURN)
    await driver.findElement(By.id('b')).sendKeys("-3.0",Key.RETURN)
    await driver.findElement(By.xpath('/html/body/div/input[20]')).click()
    await driver.findElement(By.xpath('/html/body/div/input[16]')).click()
    let alerta = await driver.switchTo().alert().getText()
    assert.strictEqual(alerta,"El exponente no puede ser negativo")
    await driver.quit();
}
async function Exponente_y_base_igual_a_cero() {
    let driver = await new Builder().forBrowser("chrome").build()
    await driver.get('file:///C:/Users/ubert/OneDrive/Documentos/Uberto/UNSA/3er/2do_semestre/Ingenieria_de_Software_II/Pruebas_trabajo/index.html');
    await driver.findElement(By.id('a')).sendKeys("0.0")
    await driver.findElement(By.id('b')).sendKeys("0.0")
    await driver.findElement(By.xpath('/html/body/div/input[20]')).click()
    await driver.findElement(By.xpath('/html/body/div/input[16]')).click()
    let alerta = await driver.switchTo().alert().getText()
    assert.strictEqual(alerta,"El exponente y la base no pueden ser 0 ambos")
    await driver.quit();
}
Exponente_correcto()
Exponente_decimal()
Exponente_negativo()
Exponente_y_base_igual_a_cero()