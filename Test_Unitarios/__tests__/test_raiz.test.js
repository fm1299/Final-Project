const calc = require('../../Pruebas_trabajo/js/calculador')
test('Raiz con cero', () => {
    const resultado = calc.raiz(0)
    expect(resultado).toBe(0);
})
test('Raiz con numero positivo', () => {
    const resultado = calc.raiz(16)
    expect(resultado).toBe(4);
})
test('Raiz con numero negativo', () => {
    const resultado = calc.raiz(-4)
    expect(resultado).toBe(NaN);
})
