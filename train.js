/* C Task */

/* Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true; */

function compareWords(word1, word2) {
    const sortedWord1 = word1.split('').sort().join('');
    const sortedWord2 = word2.split('').sort().join('');

    return sortedWord1 === sortedWord2;
}

console.log(compareWords("mitgroup", "gmtiprou"));


/*  *****   *****   *****   *****   *****   *****    *****  *****   *****   *****   *****   *****   *****   *****   *****   *****   *****   */

/* B Task */

/* Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi. */

// // Masala yechimi:

// Declaretion function
// function numberCount(data) {
//     const dataSpl = data.split('');
//     let count = 0;

//     for (let i = 0; i < dataSpl.length; i++) {
//         if (!isNaN(dataSpl[i])) { 
//             count++;
//         }
//     }
//     return count;
// }
// console.log(numberCount('b82ybhjlll+=*&33f824fb'));


// // Expression function
// const numberCount = function(data) {
//     const dataSpl = data.split('');
//     let count = 0;

//     for (let i = 0; i < dataSpl.length; i++) {
//         if (!isNaN(dataSpl[i])) { 
//             count++;
//         }
//     }
//     return count;
// }
// console.log(numberCount('b82ybhjlll+=*&33f824fb'));


// // Arrow function
// const numberCount = data => {
//     const dataSpl = data.split('');
//     let count = 0;

//     for (let i = 0; i < dataSpl.length; i++) {
//         if (!isNaN(dataSpl[i])) { 
//             count++;
//         }
//     }
//     return count;
// }
// console.log(numberCount('b82ybhjlll+=*&33f824fb'));


/*  *****   *****   *****   *****   *****   *****    *****  *****   *****   *****   *****   *****   *****   *****   *****   *****   *****   */


/* A Task */

/* Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi. 
MASALAN countLetter("e", "engineer") 3ni return qiladi. */

// // Masala yechimi:

// Declaretion function
// function letterCount(letter, word) {
//     const lettersArray = word.split('');
//     let count = 0;

//     for (let inputLetter of lettersArray) {
//         if (inputLetter === letter) {
//             count++;
//         }
//     }
//     return count;
// }; 

// console.log("kiritilingan harfdan jami:", letterCount("e", "engineer"), "ta bor");

// // Expression function
// const letterCount = function(letter, word) {
//     const lettersArray = word.split('');
//     let count = 0;

//     for (let inputLetter of lettersArray) {
//         if (inputLetter === letter) {
//             count++;
//         }
//     }
//     return count;
// }; 

// console.log("kiritilingan harfdan jami:", letterCount("e", "engineer"), "ta bor");

// // Arrow function
// const letterCount = (letter, word) => {
//     const lettersArray = word.split('');
//     let count = 0;

//     for (let inputLetter of lettersArray) {
//         if (inputLetter === letter) {
//             count++;
//         }
//     }
//     return count;
// }; 

// console.log("kiritilingan harfdan jami:", letterCount("e", "engineer"), "ta bor");


/*  *****   *****   *****   *****   *****   *****    *****  *****   *****   *****   *****   *****   *****   *****   *****   *****   *****   */


/* 22. Asynchronous functionlarni qo'llash */


// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba bo'ling", // 0-20
//     "to'g'ri boahliq tanlag va ko'proq xato qiling", // 20-30
//     "o'zingiz uchun ishlashni boshlang", // 30-40
//     "siz kuchli bo'lgan narsalarni qiling", // 40-50
//     "yoshlarga invistitsiya qiling", // 50-60
//     "endi dam oling, endi foydasi yo'q", //60
// ];

// // ASYNC function
// async function maslahatBering(a) {
//     if (typeof a !== 'number') throw new Error("insert a number");
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else {
//         //return list [5];

//         return new Promise((resolve, reject) => {
//             setTimeout(() => {

//             }, 5000)
//            resolve (list [5]); 
//         }) 
                
//         // setTimeout(function () {
//         //     callback( null, list [5] );
//         // }, 5000);
//     }
// }

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


// // call via asyn/await
// async function run() {
//     let javob = await maslahatBering(25);
//     console.log(javob);
//     javob = await maslahatBering(70);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();


/*  *****   *****   *****   *****   *****   *****    *****  *****   *****   *****   *****   *****   *****   *****   *****   *****   *****   */


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