const calc = require('../../Pruebas_trabajo/js/calculador')
test('Logaritmo con decimal', () => {
    const resultado = calc.log(1.2, 2)
    expect(resultado).toBe(0.263);
})
test('Logaritmo con enteros positivos', () => {
    const resultado = calc.log(16, 4)
    expect(resultado).toBe(2.0000);
})

test('Logaritmo con argumento unitario ', () => {
    const resultado = calc.log(1.0, 5)
    expect(resultado).toBe(0.0000);
})