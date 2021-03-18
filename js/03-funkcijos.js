   ///// FUNKCIJOS /////

   /// 1 /// Funkcija pavadinimu “tusciaFunkcija”

function tusciaFunkcija(params) {
    return false;
}

console.log(tusciaFunkcija());


console.log('------------------');



   /// 2 /// Funkcija pavadinimu “daugyba”

function daugyba(a, b) {
    const rez = a * b;
    return  rez;
}
console.log(daugyba(5, 10));
console.log(daugyba(-20, 10));
console.log(daugyba(5, -20));


   console.log('------------------');


      /// 3 ///   Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”


function skaitmenuKiekisSkaiciuje(a) {
    
    if (!isFinite(a)) {        
        return 'Pateikta netinkamo tipo reikšmė.'
    } 
    if (typeof a !== 'number') {        
        return 'Pateikta netinkamo tipo reikšmė.'
    } 
     
    return `${a}`.length
}


console.log( skaitmenuKiekisSkaiciuje( 5 ) );
//rezultatas: 1
console.log( skaitmenuKiekisSkaiciuje( 781 ) );
//rezultatas: 3
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
//rezultatas: 11
console.log( skaitmenuKiekisSkaiciuje( true ) );
//rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( skaitmenuKiekisSkaiciuje( 'asd' ) );
//rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( skaitmenuKiekisSkaiciuje( NaN ) );
//rezultatas: “Pateikta netinkamo tipo reikšmė.”
