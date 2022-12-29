const {Builder,Key, By} = require('selenium-webdriver');
const assert = require('assert');

async function Porcentaje_con_numeros_enteros() {
    let driver = await new Builder().forBrowser('chrome').build()
    await driver.get('file:///C:/Users/ubert/OneDrive/Documentos/Uberto/UNSA/3er/2do_semestre/Ingenieria_de_Software_II/practica3_ISII_rama1-main/practica3_ISII_rama1-main/Pruebas_trabajo/index.html');
    await driver.findElement(By.id('a')).sendKeys("50",Key.RETURN)
    await driver.findElement(By.id('b')).sendKeys("4",Key.RETURN)
    await driver.findElement(By.xpath('/html/body/div/input[24]')).click()
    await driver.findElement(By.xpath('/html/body/div/input[20]')).click()
    let respuesta = await driver.findElement(By.id('resultado')).getAttribute("value")
    assert.strictEqual("2",respuesta)
    await driver.quit();
}
async function Porcentaje_a_numero_negativo() {
    let driver = await new Builder().forBrowser("chrome").build()
    await driver.get('file:///C:/Users/ubert/OneDrive/Documentos/Uberto/UNSA/3er/2do_semestre/Ingenieria_de_Software_II/practica3_ISII_rama1-main/practica3_ISII_rama1-main/Pruebas_trabajo/index.html');
    await driver.findElement(By.id('a')).sendKeys("40",Key.RETURN)
    await driver.findElement(By.id('b')).sendKeys("-220",Key.RETURN)
    await driver.findElement(By.xpath('/html/body/div/input[24]')).click()
    await driver.findElement(By.xpath('/html/body/div/input[20]')).click()
    let respuesta = await driver.findElement(By.id('resultado')).getAttribute("value")
    assert.strictEqual("-88",respuesta)
    await driver.quit();
}
async function Porcentaje_con_numeros_negativos() {
    let driver = await new Builder().forBrowser("chrome").build()
    await driver.get('file:///C:/Users/ubert/OneDrive/Documentos/Uberto/UNSA/3er/2do_semestre/Ingenieria_de_Software_II/practica3_ISII_rama1-main/practica3_ISII_rama1-main/Pruebas_trabajo/index.html');
    await driver.findElement(By.id('a')).sendKeys("-40",Key.RETURN)
    await driver.findElement(By.id('b')).sendKeys("-220",Key.RETURN)
    await driver.findElement(By.xpath('/html/body/div/input[24]')).click()
    await driver.findElement(By.xpath('/html/body/div/input[20]')).click()
    let respuesta = await driver.findElement(By.id('resultado')).getAttribute("value")
    assert.strictEqual("88",respuesta)
    await driver.quit();
}
async function Porcentaje_con_numeros_decimales() {
    let driver = await new Builder().forBrowser("chrome").build()
    await driver.get('file:///C:/Users/ubert/OneDrive/Documentos/Uberto/UNSA/3er/2do_semestre/Ingenieria_de_Software_II/practica3_ISII_rama1-main/practica3_ISII_rama1-main/Pruebas_trabajo/index.html');
    await driver.findElement(By.id('a')).sendKeys("-40.5",Key.RETURN)
    await driver.findElement(By.id('b')).sendKeys("-220.2",Key.RETURN)
    await driver.findElement(By.xpath('/html/body/div/input[24]')).click()
    await driver.findElement(By.xpath('/html/body/div/input[20]')).click()
    let respuesta = await driver.findElement(By.id('resultado')).getAttribute("value")
    assert.strictEqual("89.181",respuesta)
    await driver.quit();;
}

Porcentaje_con_numeros_enteros()
Porcentaje_a_numero_negativo() 
Porcentaje_con_numeros_negativos()
Porcentaje_con_numeros_decimales()