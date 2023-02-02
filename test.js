//Convertidor de Euro a Dolar
test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar, fromDollarToYen } = require('./app.js')
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})
//Convertidor de Dolar a Yen
test("One dollar should be 128.45 yenes", function(){
    const {fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(1)).toBe(128.45); 
    expect(fromDollarToYen(5)).toEqual(642.25); 
    expect(fromDollarToYen).toBeNumber; 
})
//Convertidor de Yen a Pounds
test("One yen should be 0.0063 pounds", function(){
    const {fromYenToPound} = require('./app.js')
    expect(fromYenToPound(1)).toBe(0.0063); 
    expect(fromYenToPound).not.toBeString;
})

