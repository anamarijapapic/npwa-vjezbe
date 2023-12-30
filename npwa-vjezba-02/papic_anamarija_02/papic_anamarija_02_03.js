/**
 * 3.
 * Napisati funkciju numSelectString koja prima niz brojeva i vraca string. U ovoj funkciji treba
 * iskoristiti funkcije filter, sort i reduce kako bi se kao povrat dobio string koji sadrzi samo neparne
 * brojeve iz niza, odvojene zarezom koji su poredani uzlazno. Npr za niz [17, 34, 3, 12, 23] povrat
 * je string „3, 17, 23”.
 */

function numSelectString(nums) {
    return nums
        .filter(el => el % 2 !== 0)
        .sort((a, b) => a - b)
        .reduce((acc, curr) => acc === '' ? `${curr}` : `${acc}, ${curr}`, '');
}

console.log(numSelectString([17, 34, 3, 12, 23]));
