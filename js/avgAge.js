/*
Gimines medyje reikia rasti kas buvo/yra vyriausias?
*/

function avgAge(asmuo) {

    let childCount = 1;
    let childAgeSum = asmuo.age;

    if (asmuo.children) {
        for (let i = 0; i < asmuo.children.length; i++) {
            const child = asmuo.children[i];

            const childInfo = avgAge(child);    

            childCount += childInfo.childCount;
            childAgeSum += childInfo.ageSum;
            
            //console.log(childInfo);
        }
    }


    return {
        childCount: childCount,
        ageSum: childAgeSum
    };
}



const gimine1 = {
    name: 'Petras',
    age: 40,
    children: [
        {
            name: 'Maryte',
            age: 45,
            children: [
                {
                    name: 'Onute',
                    age: 70
                },
                {
                    name: 'Elvyra',
                    age: 66
                },
            ]
        },
        {
            name: 'Jonas',
            age: 43,
            children: [
                {
                    name: 'Aleksas',
                    age: 20,
                    children: [
                        {
                            name: 'Gokas',
                            age: 200
                        }
                    ]
                },
                {
                    name: 'Gabriele',
                    age: 80
                },
            ]
        },
    ]
}

const gimineDuomenys = avgAge(gimine1);
let average = gimineDuomenys.ageSum / gimineDuomenys.childCount;
console.log(gimineDuomenys, 'Average age:', average);

