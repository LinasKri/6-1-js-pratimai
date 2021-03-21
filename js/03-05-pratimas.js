function isrinktiRaides(tekstas, raide) {
    let tekstas = '';
    let raide = 0;
    if (tekstas !== '') {
        console.log('Pirmasis kintamasis yra netinkamo tipo.');
    }
}

















console.log( isrinktiRaides( 'abcdefg', 2 ) );
// rezultatas: 'bdf'
console.log( isrinktiRaides( 'abcdefghijkl', 3 ) );
// rezultatas: 'cfil'
console.log( isrinktiRaides( 'abc', 0 ) );
// rezultatas: 'Antrasis kintamasis turi būti didesnis už nulį.'
console.log( isrinktiRaides( 'abc', 4 ) );
// rezultatas: 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.'
console.log( isrinktiRaides( 1561, 2 ) );
// rezultatas: 'Pirmasis kintamasis yra netinkamo tipo.'

