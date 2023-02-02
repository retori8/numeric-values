// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 128.45;
    return valueInYen;
}
const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 0.0063;
    return valueInPound;
}


module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }