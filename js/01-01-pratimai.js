// KINTAMUJU INICIJAVIMAS//

//1//
const pirmasSkaicius = 15;
console.log(pirmasSkaicius)

const antrasSkaicius = 69;
console.log(antrasSkaicius)

const treciaSkaicius = 420;
console.log(treciaSkaicius)

//2//
const pirmasZodis = 'Vaikas';
console.log(pirmasZodis);

const antrasZodis = 'gavo';
console.log(antrasZodis);

const treciasZodis = 'dovanu';
console.log(treciasZodis);

//3//
const skaiciai1 = [1, 3, 5, 7, 9];
console.log(skaiciai1)

const skaiciai2 = [2, 4, 6, 8, 10];
console.log(skaiciai2)

const skaiciai3 = [3, 15, 10, 7, 22];
console.log(skaiciai3)

//4//
const raides1 = ['L', 'i', 'n', 'a', 's'];
console.log(raides1);

const raides2 = ['T', 'o', 'm', 'a', 's'];
console.log(raides2)

const raides3 = ['I', 'g', 'n', 'a', 's'];
console.log(raides3)

console.log('-------------------------')
//VAIKSMAI SU KINTAMAISIAIS//

//1//

const suma =  + pirmasSkaicius + antrasSkaicius + treciaSkaicius;
console.log('Suma:', suma);

//2//
const zodziuJunginys = pirmasZodis+ ' ' + antrasZodis + ' ' + treciasZodis;
console.log('Zodziu junginys:', zodziuJunginys);

//3//
const skaiciuVerte1 = skaiciai1[0] - skaiciai1[1] + skaiciai1[2] - skaiciai1[3] + skaiciai1[4];
console.log('Pirmoji verte:', skaiciuVerte1);

const skaiciuVerte2 = skaiciai2[0] - skaiciai2[1] + skaiciai2[2] - skaiciai2[3] + skaiciai2[4];
console.log('Antroji verte:', skaiciuVerte2);


const skaiciuVerte3 = skaiciai3[0] - skaiciai3[1] + skaiciai3[2] - skaiciai3[3] + skaiciai3[4];
console.log('Trecioji verte:', skaiciuVerte3);

//4//

const raidziuJunginys1 = raides1[0] + raides1[1] + raides1[2] + raides1[3] + raides1[4];
const raidziuJunginys2 = raides2[0] + raides2[1] + raides2[2] + raides2[3] + raides2[4];
const raidziuJunginys3 = raides3[0] + raides3[1] + raides3[2] + raides3[3] + raides3[4];

const sujungtasSarasas = raidziuJunginys3 + ', ' + raidziuJunginys2 + ', ' + raidziuJunginys1;
console.log(sujungtasSarasas);


console.log('-------------------------');
//KINTAMUJU PALYGINIMAS//

//1//

const a = 3;
const b = 15;
const c = 10;
const d = 7;
const teisingai = 'Pomidoras';    
const neteisingai = 'Bandyk dar karta';

// a //

if (a > b) {
    console.log(teisingai);
} else {
    console.log(neteisingai);    
}

if (b > c) {
    console.log(teisingai);
} else {
    console.log(neteisingai);    
}

if (c > d) {
    console.log(teisingai);
} else {
    console.log(neteisingai);    
}
if (d > a) {
    console.log(teisingai);
} else {
    console.log(neteisingai);    
}

console.log('----------------');
// b //

if (a < b) {
    console.log(teisingai);
} else {
    console.log(neteisingai);    
}

if (b < c) {
    console.log(teisingai);
} else {
    console.log(neteisingai);    
}

if (c < d) {
    console.log(teisingai);
} else {
    console.log(neteisingai);    
}

if (d < a) {
    console.log(teisingai);
} else {
    console.log(neteisingai);    
}

console.log('----------------');
// c //

if (a === b) {
    console.log(teisingai);
} else {
    console.log(neteisingai);    
}

if (b === c) {
    console.log(teisingai);
} else {
    console.log(neteisingai);    
}

if (c === d) {
    console.log(teisingai);
} else {
    console.log(neteisingai);    
}

if (d === a) {
    console.log(teisingai);
} else {
    console.log(neteisingai);    
}

console.log('------------------');
// d //

if (a !== b) {
    console.log(teisingai);
} else {
    console.log(neteisingai);    
}

if (b !== c) {
    console.log(teisingai);
} else {
    console.log(neteisingai);    
}

if (c !== d) {
    console.log(teisingai);
} else {
    console.log(neteisingai);    
}

if (d !== a) {
    console.log(teisingai);
} else {
    console.log(neteisingai);    
}

console.log('------------------');
// e //

if (a >= b) {
    console.log(teisingai);
} else {
    console.log(neteisingai);    
}

if (b >= c) {
    console.log(teisingai);
} else {
    console.log(neteisingai);    
}

if (c >= d) {
    console.log(teisingai);
} else {
    console.log(neteisingai);    
}

if (d >= a) {
    console.log(teisingai);
} else {
    console.log(neteisingai);    
}

console.log('------------------');
// f //

if (a <= b) {
    console.log(teisingai);
} else {
    console.log(neteisingai);    
}

if (b <= c) {
    console.log(teisingai);
} else {
    console.log(neteisingai);    
}

if (c <= d) {
    console.log(teisingai);
} else {
    console.log(neteisingai);    
}

if (d <= a) {
    console.log(teisingai);
} else {
    console.log(neteisingai);    
}

console.log("-------------------");
//2//

const zodis1 = 'Linas'
const zodis2 = 'Jolanta'
const zodis3 = 'Tankas'
const zodis4 = 'Rimka'

const ilgis1 = zodis1.length
const ilgis2 = zodis2.length
const ilgis3 = zodis3.length
const ilgis4 = zodis4.length

// 3 //

// a //

if (ilgis1 > ilgis2) {
    console.log(teisingai);
} else {
    console.log(neteisingai);   
} 

if (ilgis2 > ilgis3) {
    console.log(teisingai);
} else {
    console.log(neteisingai);   
} 

if (ilgis3 > ilgis4) {
    console.log(teisingai);
} else {
    console.log(neteisingai);   
} 

if (ilgis4 > ilgis1) {
    console.log(teisingai);
} else {
    console.log(neteisingai);   
} 

console.log('--------------------');
// b //

if (ilgis1 < ilgis2) {
    console.log(teisingai);
} else {
    console.log(neteisingai);   
} 

if (ilgis2 < ilgis3) {
    console.log(teisingai);
} else {
    console.log(neteisingai);   
} 

if (ilgis3 < ilgis4) {
    console.log(teisingai);
} else {
    console.log(neteisingai);   
} 

if (ilgis4 < ilgis1) {
    console.log(teisingai);
} else {
    console.log(neteisingai);   
} 

console.log('----------------------');
// c //

if (ilgis1 === ilgis2) {
    console.log(teisingai);
} else {
    console.log(neteisingai);   
} 

if (ilgis2 === ilgis3) {
    console.log(teisingai);
} else {
    console.log(neteisingai);   
} 

if (ilgis3 === ilgis4) {
    console.log(teisingai);
} else {
    console.log(neteisingai);   
} 

if (ilgis4 === ilgis1) {
    console.log(teisingai);
} else {
    console.log(neteisingai);   
} 

console.log('-------------------');
// d //

if (ilgis1 !== ilgis2) {
    console.log(teisingai);
} else {
    console.log(neteisingai);   
} 

if (ilgis2 !== ilgis3) {
    console.log(teisingai);
} else {
    console.log(neteisingai);   
} 

if (ilgis3 !== ilgis4) {
    console.log(teisingai);
} else {
    console.log(neteisingai);   
} 

if (ilgis4 !== ilgis1) {
    console.log(teisingai);
} else {
    console.log(neteisingai);   
} 

console.log('-------------------');
// e //

if (ilgis1 >= ilgis2) {
    console.log(teisingai);
} else {
    console.log(neteisingai);   
} 

if (ilgis2 >= ilgis3) {
    console.log(teisingai);
} else {
    console.log(neteisingai);   
} 

if (ilgis3 >= ilgis4) {
    console.log(teisingai);
} else {
    console.log(neteisingai);   
} 

if (ilgis4 >= ilgis1) {
    console.log(teisingai);
} else {
    console.log(neteisingai);   
} 

console.log('-------------------');
// f //

if (ilgis1 <= ilgis2) {
    console.log(teisingai);
} else {
    console.log(neteisingai);   
} 

if (ilgis2 <= ilgis3) {
    console.log(teisingai);
} else {
    console.log(neteisingai);   
} 

if (ilgis3 <= ilgis4) {
    console.log(teisingai);
} else {
    console.log(neteisingai);   
} 

if (ilgis4 <= ilgis1) {
    console.log(teisingai);
} else {
    console.log(neteisingai);   
} 

console.log('---------------------');
// 4 //

const sar1 = [9, 7, 8, 4, 5, 6]
const sar2 = [15, 46, 8, 96, 5, 2, 3]
const sar3 = [31, 6, 62, 3, 16, 41]
const sarIlgis1 = sar1.length
const sarIlgis2 = sar2.length
const sarIlgis3 = sar3.length

// 5 //

// a //

if (sarIlgis1 > sarIlgis2) {
    console.log(teisingai);
} else {
    console.log(neteisingai);
}

if (sarIlgis2 > sarIlgis3) {
    console.log(teisingai);
} else {
    console.log(neteisingai);
}

if (sarIlgis3 > sarIlgis1) {
    console.log(teisingai);
} else {
    console.log(neteisingai);
}

console.log('---------------');
// b //

if (sarIlgis1 < sarIlgis2) {
    console.log(teisingai);
} else {
    console.log(neteisingai);
}

if (sarIlgis2 < sarIlgis3) {
    console.log(teisingai);
} else {
    console.log(neteisingai);
}

if (sarIlgis3 < sarIlgis1) {
    console.log(teisingai);
} else {
    console.log(neteisingai);
}

console.log('------------------');
// c //

if (sarIlgis1 === sarIlgis2) {
    console.log(teisingai);
} else {
    console.log(neteisingai);
}

if (sarIlgis2 === sarIlgis3) {
    console.log(teisingai);
} else {
    console.log(neteisingai);
}

if (sarIlgis3 === sarIlgis1) {
    console.log(teisingai);
} else {
    console.log(neteisingai);
}

console.log('------------------');
// d //

if (sarIlgis1 !== sarIlgis2) {
    console.log(teisingai);
} else {
    console.log(neteisingai);
}

if (sarIlgis2 !== sarIlgis3) {
    console.log(teisingai);
} else {
    console.log(neteisingai);
}

if (sarIlgis3 !== sarIlgis1) {
    console.log(teisingai);
} else {
    console.log(neteisingai);
}

console.log('------------------');
// e //

if (sarIlgis1 >= sarIlgis2) {
    console.log(teisingai);
} else {
    console.log(neteisingai);
}

if (sarIlgis2 >= sarIlgis3) {
    console.log(teisingai);
} else {
    console.log(neteisingai);
}

if (sarIlgis3 >= sarIlgis1) {
    console.log(teisingai);
} else {
    console.log(neteisingai);
}
console.log('------------------');
// f //

if (sarIlgis1 <= sarIlgis2) {
    console.log(teisingai);
} else {
    console.log(neteisingai);
}

if (sarIlgis2 <= sarIlgis3) {
    console.log(teisingai);
} else {
    console.log(neteisingai);
}

if (sarIlgis3 <= sarIlgis1) {
    console.log(teisingai);
} else {
    console.log(neteisingai);
}