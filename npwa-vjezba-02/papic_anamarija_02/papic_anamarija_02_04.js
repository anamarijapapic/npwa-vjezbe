/**
 * 4.
 * Napisati funkciju koja prima niz i u njoj kreirati for petlju koja iterira kroz elemente niza i vraća
 * sumu elemenata.
 */

// for statement
function sumFor(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

// for...in statement
function sumForIn(arr) {
    let sum = 0;

    for (const i in arr) {
        sum += arr[i];
    }

    return sum;
}

// for...of statement
function sumForOf(arr) {
    let sum = 0;

    for (const el of arr) {
        sum += el;
    }

    return sum;
}

// forEach() method of Array instances
function sumForEach(arr) {
    let sum = 0;

    arr.forEach(el => {
        sum += el;
    });

    return sum;
}

console.log(sumFor([17, 34, 3, 12, 23]));
console.log(sumForIn([17, 34, 3, 12, 23]));
console.log(sumForOf([17, 34, 3, 12, 23]));
console.log(sumForEach([17, 34, 3, 12, 23]));
