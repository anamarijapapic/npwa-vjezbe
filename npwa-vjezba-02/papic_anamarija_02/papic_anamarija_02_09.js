/**
 * 9.
 * Nadopuniti zadatak 8 na nacin da next() funkcija vraca objekt sa vrijednostima value i done
 * {value: vrijednost, done: false}. Property value sadrzi vrijednost trenutnog elementa niza, a
 * property done ima vrijednost false sve dok se ne dodje do posljednjeg clana niza (tada mu se
 * vrijednost mijenja u true). Ukoliko se next() funkcija poziva dalje, treba vratiti objekt koji sadrzi
 * samo property done postavljen na true {done: true}.
 */

function iterator(arr) {
    let i = 0;

    return myObj = {
        next: function () {
            let nextObj = {};

            if (i < arr.length) {
                nextObj = {
                    value: arr[i++],
                    done: i === arr.length ? true : false,
                }
            } else {
                nextObj = {
                    done: true,
                }
            }

            return nextObj;
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
