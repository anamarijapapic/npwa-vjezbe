/**
 * 17.
 * Niže je naveden objekt fakePeople koji imitira podatke izvučene iz baze podataka. Napisati
 * funkciju fakeAPICall(i) koja vraća promise koji će se resolve-ati u podatke osobe na i-tom mjestu.
 * Promise resolve-ati nakon random broja milisekundi između 1000 i 3000. Napisati funkciju
 * getAllData, koja koristi Promise.all kako bi se 3 API poziva fakeAPICall(i) izvršila istovremeno.
 * Argument i odabrati proizvoljno. U slučaju da je i veći od 3, reject-ati promise.
 * Promise.all
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
 * const fakePeople = [
 *  { name: 'Ivo', hasPets: false},
 *  { name: 'Eva', hasPets: true},
 *  { name: 'Marko', hasPets: true}
 * ]
 */

const fakePeople = [
    { name: 'Ivo', hasPets: false},
    { name: 'Eva', hasPets: true},
    { name: 'Marko', hasPets: true}
];

function fakeAPICall(i) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (i > 3) {
                reject();
            } else {
                resolve(fakePeople[i]);
            }
        }, Math.random() * (3000 - 1000) + 1000);
    });
}

function getAllData(i) {
    return Promise.all([
        fakeAPICall(i),
        fakeAPICall(i + 1),
        fakeAPICall(i + 2)
    ]);
}

getAllData(0)
    .then((value) => {
        console.log(value);
    })
    .catch(() => {
        console.log('Error');
    });
