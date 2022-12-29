const calc=require('../../Pruebas_trabajo/js/calculador')
test('Porcentaje con numeros enteros', () => {
    const resultado = calc.percentage(20, 20)
    expect(resultado).toBe(4);
})

test('Porcentaje a numero negativo ', () => {
    
    const resultado = calc.percentage(40, -220)
    expect(resultado).toBe(-88);

})

test('Porcentaje con numeros negativos', () => {
    const resultado = calc.percentage(-40, -220)
    expect(resultado).toBe(88);
})


test('Porcentaje con numeros decimales', () => {
    const resultado = calc.percentage(40.5, 220.2)
    expect(resultado).toBe(89.181);
})
test('Porcentajes negativos con numeros negativos', () => {
    const resultado = calc.percentage(-40, -220)
    expect(resultado).toBe(88);
})


test('Porcentaje con numeros decimales negativos', () => {
    const resultado = calc.percentage(-40.5, -220.2)
    expect(resultado).toBe(89.181);
})