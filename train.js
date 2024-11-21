
/* 22. Asynchronous functionlarni qo'llash */


console.log("Jack Ma maslahatlari");
const list = [
    "yaxshi talaba bo'ling", // 0-20
    "to'g'ri boahliq tanlag va ko'proq xato qiling", // 20-30
    "o'zingiz uchun ishlashni boshlang", // 30-40
    "siz kuchli bo'lgan narsalarni qiling", // 40-50
    "yoshlarga invistitsiya qiling", // 50-60
    "endi dam oling, endi foydasi yo'q", //60
];

// ASYNC function
async function maslahatBering(a) {
    if (typeof a !== 'number') throw new Error("insert a number");
    else if (a <= 20) return list[0];
    else if (a > 20 && a <= 30) return list[1];
    else if (a > 30 && a <= 40) return list[2];
    else if (a > 40 && a <= 50) return list[3];
    else if (a > 50 && a <= 60) return list[4];
    else {
        //return list [5];

        return new Promise((resolve, reject) => {
            setTimeout(() => {

            }, 5000)
           resolve (list [5]); 
        }) 
                
        // setTimeout(function () {
        //     callback( null, list [5] );
        // }, 5000);
    }
}

// // call via then/catch
// console.log("passed here 0");
// maslahatBering(65) 
//     .then ((data) => {
//         console.log ("javob:", data);
//     })
//     .catch ((err) => {
//         console.log ("ERROR:", err);
//     })
// console.log("passed here 1");


// call via asyn/await
async function run() {
    let javob = await maslahatBering(25);
    console.log(javob);
    javob = await maslahatBering(70);
    console.log(javob);
    javob = await maslahatBering(41);
    console.log(javob);
}
run();



/* 21. NodeJS event loop va Callback functionlarni o'rganamiz */


// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba bo'ling", // 0-20
//     "to'g'ri boahliq tanlag va ko'proq xato qiling", // 20-30
//     "o'zingiz uchun ishlashni boshlang", // 30-40
//     "siz kuchli bo'lgan narsalarni qiling", // 40-50
//     "yoshlarga invistitsiya qiling", // 50-60
//     "endi dam oling, endi foydasi yo'q", //60
// ];

// // CALLBACK function
// function maslahatBering(a, callback) {
//     if (typeof a !== 'number') callback("insert a number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list [1]);
//     else if (a > 30 && a <= 40) callback(null, list [2]);
//     else if (a > 40 && a <= 50) callback(null, list [3]);
//     else if (a > 50 && a <= 60) callback(null, list [4]);
//     else {
//         setTimeout(function () {
//             callback( null, list [5] );
//         }, 5000);
//     }
// }

// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//     if (err) console.log("ERROR:", err);
//     else {
//         console.log ("javob:", data);
//     }
// });

// console.log("passed here 1");