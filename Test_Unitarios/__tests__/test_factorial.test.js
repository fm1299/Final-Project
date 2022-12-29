const calc = require('../../Pruebas_trabajo/js/calculador')
test('Factorial con cero', () => {
    const resultado = calc.potencia(0.0)
    expect(resultado).toBe(1.0);
})
test('Factorial con numero positivo', () => {
    const resultado = calc.potencia(5.0)
    expect(resultado).toBe(120.0);
})
test('Factorial con numero negativo', () => {
    const resultado = calc.potencia(-5.0)
    expect(resultado).toBe(-120.0);
})
