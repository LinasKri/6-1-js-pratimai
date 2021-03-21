
   /// 4 ///  Funkcija pavadinimu “didziausiasSkaiciusSarase”

function bigNumb(list) {
    if (!Array.isArray(list)) {
    return 'ERROR: pateikta netinkamo tipo reiksme';
}

    if (list.length === 0) {
        return 'ERROR: pateiktas sarasas negali buti tuscias';
    }

    let biggest = list[0]; // jeigu sarase yra sveikieji skaiciai                
    // arba -Infinity; let i = 0 ---> jeigu sarase yra pamineta Infinity

    for (let i = 1; i < list.length; i++) {
        const number = list[i];
        if (number > biggest) {
            biggest = number;
        }
    }

    return biggest;
}


console.log( bigNumb( [ 1 ] ) );
//rezultatas: 1
console.log( bigNumb( [ 1, 2, 3 ] ) );
//rezultatas: 3
console.log( bigNumb( [ -5, 78, 14, 0, 18 ] ) );
//rezultatas: 78
console.log( bigNumb( [ 69, 69, 69, 69, 66 ] ) );
//rezultatas: 69
console.log( bigNumb( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
//rezultatas: -1
console.log( bigNumb( 'pomidoras' ) );
//rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( bigNumb( [] ) );
//rezultatas: “Pateiktas sąrašas negali būti tuščias.”