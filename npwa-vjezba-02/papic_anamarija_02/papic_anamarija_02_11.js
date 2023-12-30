/**
 * 11.
 * Riješiti prethodni zadatak koristeći generator funkciju.
 */

function iterator(str) {
    let words = str.split(' ');

    return myObj = {
        *generator() {
            yield* words;
        },
    };
}

const getNextElement = iterator('The quick brown fox jumps over the lazy dog.').generator();

console.log(getNextElement.next());
console.log(getNextElement.next());
console.log(getNextElement.next());
console.log(getNextElement.next());
console.log(getNextElement.next());
console.log(getNextElement.next());
console.log(getNextElement.next());
console.log(getNextElement.next());
console.log(getNextElement.next());
console.log(getNextElement.next());
  