/**
 * 10.
 * Napisati „iterator funkciju“ koja prima string riječi odvojenih razmakom, te vraća objekt koji na
 * sebi ima metodu next. Svakim pozivom metode next, vraća se jedna po jedna riječ. 
 */

function iterator(str) {
    let words = str.split(' ');
    i = 0;

    return myObj = {
        next: function () {
            return i < words.length ? words[i++] : undefined;
        }
    };
}

const getNextElement = iterator('The quick brown fox jumps over the lazy dog.').next;

console.log(getNextElement());
console.log(getNextElement());
console.log(getNextElement());
console.log(getNextElement());
console.log(getNextElement());
console.log(getNextElement());
console.log(getNextElement());
console.log(getNextElement());
console.log(getNextElement());
console.log(getNextElement());
