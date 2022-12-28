const calc = require('../../Pruebas_trabajo/js/calculador')
test('Potencia con un decimal', () => {
    const resultado = calc.potencia(1.2, 2.0)
    expect(resultado).toBe(1.44);
})
test('Potencia con negativo impar', () => {
    const resultado = calc.potencia(-4.0, 3.0)
    expect(resultado).toBe(-64.0);
})
test('Potencia con negativo par', () => {
    const resultado = calc.potencia(-3.0, 4.0)
    expect(resultado).toBe(81.0);
})
test('Potencia con base cero', () => {
    const resultado = calc.potencia(0.0, 3.0)
    expect(resultado).toBe(0);
})
test('Potencia con exponente cero', () => {
    const resultado = calc.potencia(-3.0, 0.0)
    expect(resultado).toBe(1.0);
})