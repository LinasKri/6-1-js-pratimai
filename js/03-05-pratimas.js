


function isrinktiRaides(text, raide) {

    if (typeof text !== "string") {
    return 'Pirmasis kintamasis yra netinkamo tipo.';
    }
    if (text > 10) {
        return 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.'
    }
    
}

















console.log( isrinktiRaides( 'abcdefg', 2 ),'->', 'bdf');
// rezultatas: 'bdf'
console.log( isrinktiRaides( 'abcdefghijkl', 3 ) );
// rezultatas: 'cfil'
console.log( isrinktiRaides( '', 0 ) );

console.log( isrinktiRaides( 'abc', 0 ) );
// rezultatas: 'Antrasis kintamasis turi būti didesnis už nulį.'
console.log( isrinktiRaides( 'abc', 4 ) );
// rezultatas: 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.'
console.log( isrinktiRaides( 1561, 2 ) );
// rezultatas: 'Pirmasis kintamasis yra netinkamo tipo.'

