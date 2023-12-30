/**
 * 8.
 * Kreirati „iterator funkciju“ koja prima niz i vraća objekt koji sadrži next metodu. Svaki poziv next
 * metode vraća sljedeći element niza i njegov index u nizu (metoda next vraća niz koji se sastoji od
 * dva člana).
 */

function iterator(arr) {
    let i = 0;

    return myObj = {
        next: function () {
            return i < arr.length ? [arr[i], i++] : [undefined, undefined];
        }
    };
}

const getNextElement = iterator([17, 34, 3, 12, 23]).next;

console.log(getNextElement());
console.log(getNextElement());
console.log(getNextElement());
console.log(getNextElement());
console.log(getNextElement());
console.log(getNextElement());
