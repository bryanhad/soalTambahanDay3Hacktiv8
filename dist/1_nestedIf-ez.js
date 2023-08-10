"use strict";
/*
  buat nested kondisi yang semua kondisinya membandingkan string dengan string
*/
// function for comparing string!
const compareString = (w1, w2) => {
    let msg;
    msg = w1 === w2 ? 'katanya sama!' : 'katanya beda!';
    if (w1 === w2) {
        msg = 'katanya sama!';
    }
    else {
        msg = 'katanya beda!';
        if (w1.length > w2.length) {
            msg += ' Kata ke-1 lebih panjang dari kata ke-2!';
        }
        else if (w1.length < w2.length) {
            console.log(w1.length, w2.length);
            msg += ' Kata ke-2 lebih panjang dari kata ke-1!';
        }
        else {
            msg += ' Katanya panjangnya sama!';
        }
    }
    return msg;
};
console.log('compare string:', compareString('bebek', 'tikus'));
/*
  buat nested kondisi yang semua kondisinya membandingkan number dengan number
*/
// function for comparing number!
const compareNumber = (n1, n2) => {
    let msg = n1 === n2 ? 'angkanya sama!' : 'angkanya beda!';
    if (n1 === n2) {
        msg = 'angkanya sama!';
    }
    else {
        msg = 'angkanya beda!';
        if (n1 > n2) {
            msg += ' Angka ke-1 lebih besar dari angka ke-2!';
        }
        else {
            msg += ' Angka ke-2 lebih besar dari angka ke-1!';
        }
    }
    return msg;
};
console.log('compare number:', compareNumber(10, 10));
/*
  buat nested kondisi yang semua kondisinya membandingkan boolean dengan boolean
*/
const compareBoolean = (bool1, bool2) => {
    const msg = bool1 === bool2 ? 'booleannya sama!' : 'booleannya beda!';
    return msg;
};
console.log('compare boolean:', compareBoolean(true, false));
/*
    Mulai kebawah ini cuma buat iseng iseng aja hehe
*/
// reverse string without using reverse!
const reverseString = (string) => {
    let reversed = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i];
    }
    return reversed;
};
console.log('reversed string:', reverseString('Ucok suka makan nasi uduk'));
// soal tambahan kak Awall 
/* */
let phrase = 'aku cinta nasi uduk';
let vokal = 'a';
const countVokal = (phrase, vokal) => {
    let total = 0;
    for (let i = 0; i <= phrase.length; i++) {
        if (phrase[i] === vokal) {
            total += 1;
        }
    }
    return total;
};
console.log(`terdapat ${countVokal(phrase, vokal)} vokal ${vokal} didalam phrase ${phrase}`);
// create a triangle function! (easy)
// const createTriangle = (height:number) => {
//     let string = ''
//     for (let i = 0; i < height; i++) {
//         string += 
//     }
// }
