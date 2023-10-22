/**
 * 8.
 * Koristeći izvedbu funkcije reduce(), napisati funkciju unija(). Funkcija unija(), iz
 * dva niza koja prima kao argumente, vraća niz objedinjenih elemenata iz oba niza.
 */

const { reduce } = require('./papic_anamarija_01_06');

function unija(arr1, arr2) {
	const unionElements = reduce([...arr1, ...arr2], (acc, el) => {
        if (! acc.includes(el)) {
            acc.push(el);
        }

        return acc;
    }, []);

    return unionElements;
}

console.log(unija([1, 2, 3, 4, 5], [2, 4, 6, 8, 10]));
