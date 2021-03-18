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
    
    if (typeof a !== 'number') {        
        return 'Pateikta netinkamo tipo reikšmė.'
    } 
    if (!isFinite(a)) {        
        return 'Pateikta netinkamo tipo reikšmė.'
    } 

    const tekstinisSkaicius  = '' + a;
    let skaitmenuKiekis = tekstinisSkaicius.length;

    if (a % 1 !== 0) {
        skaitmenuKiekis--;
    }
    if (a < 0 ){
        skaitmenuKiekis--;
    }

    return skaitmenuKiekis

    //return `${a}`.length  
}


console.log( skaitmenuKiekisSkaiciuje( 5 ) );
//rezultatas: 1
console.log( skaitmenuKiekisSkaiciuje( 781 ) );
//rezultatas: 3
console.log( skaitmenuKiekisSkaiciuje( 3.1234 ) );
//rezultatas: 5
console.log( skaitmenuKiekisSkaiciuje( -420 ) );
//rezultatas: 3
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
//rezultatas: 11
console.log( skaitmenuKiekisSkaiciuje( true ) );
//rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( skaitmenuKiekisSkaiciuje( 'asd' ) );
//rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( skaitmenuKiekisSkaiciuje( NaN ) );
//rezultatas: “Pateikta netinkamo tipo reikšmė.”

console.log('------------------');



   /// 4 ///  Funkcija pavadinimu “didziausiasSkaiciusSarase”





function didziausiasSkaiciusSarase(a) {
    if (typeof a !== "object") {   
        return 'Pateikta netinkamo tipo reikšmė.'
    } 
    if (typeof a === "string") {
        
    }
   }

console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
//rezultatas: 1
console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
//rezultatas: 3
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
//rezultatas: 78
console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
//rezultatas: 69
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
//rezultatas: -1
console.log( didziausiasSkaiciusSarase( 'pomidoras' ) );
//rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( didziausiasSkaiciusSarase( [] ) );
//rezultatas: “Pateiktas sąrašas negali būti tuščias.”
