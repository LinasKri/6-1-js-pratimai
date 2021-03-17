// CIKLO for PANAUDOJIMAS //

// 1 //
/*

0 - 4           = 10
10 - 14         = 60
20 - 24         = 110
0 - 100         = 5050
574 - 815       = labai didelis skaicius
-50 - 50        = 0
-70 - 30        = santykinai didelis skaicius (-2020)
0 - 0           = 0

*/

const nuo = 0;
const iki = 1000;
let suma = 0;

if (nuo <= iki) {
    for (let i = nuo; i <= iki; i++) {
        suma += i;    
    }    
} else {
    for (let i = iki; i <= nuo; i++) {
        suma += i;
    }    
}

const ats = `Intervale nuo ${nuo} iki ${iki} suma yra ${suma}`
console.log(ats);





console.log('--------------------');







    ///// 2 /////


const text = 'abcdef';
let reverse ='';
    
for (let i = 0; i < text.length; i++) {
     reverse = text[i] + reverse
}
console.log(text, '->' , reverse);
    
    
    // GALIMI VARIANTAI //

    // for (let i = 0; i < text.length; i++) {
    // reverse += text[text.length - 1 - i]  
    // }

    // for (let i = text.length; i >= 0; i--) {    
    //      reverse += text[i - 1];    
    // }

    // for (let i = tekstas.length-1; i >= 0; i--) {
    //      reverse += text[i];    
    // }  

console.log('---------------------');



    ///// 3 /////

    
