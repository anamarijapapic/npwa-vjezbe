/**
 * 5.
 * Napisati „iterator funkciju“ koja kao argument prima niz elemenata, te vraća funkciju koja pri
 * svakom pozivu vraća sljedeći član niza sa konkateniranim stringom „je n-ti element niza“. (hint.
 * closure).
 */

function iterator(arr) {
    let i = 0;

    function next() {
        if (i < arr.length) {
            console.log(`${arr[i]} je ${i + 1}-ti element niza.`);
            i++;
        }
        else {
            console.log('Svi elementi niza su već prošli iteraciju, nema sljedećeg elementa.');
        }
    }

    return next;
}

const getNextElement = iterator([17, 34, 3, 12, 23]);

getNextElement();
getNextElement();
getNextElement();
getNextElement();
getNextElement();
getNextElement();
