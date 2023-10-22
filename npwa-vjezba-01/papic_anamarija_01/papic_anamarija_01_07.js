/**
 * 7.
 * Koristeći izvedbu funkcije reduce() iz prethodnog zadatka, napisati funkciju presjek().
 * Funkcija presjek, iz dva niza koja prima kao argumente, vraća niz sa elementima koji se
 * nalaze u oba niza.
 */

const { reduce } = require('./papic_anamarija_01_06');

function presjek(arr1, arr2) {
	const intersectElements = reduce(arr1, (acc, el) => {
        if (arr2.includes(el)) {
            acc.push(el);
        }

        return acc;
    }, []);

    return intersectElements;
}

console.log(presjek([1, 2, 3, 4, 5], [2, 4, 6, 8, 10]));
