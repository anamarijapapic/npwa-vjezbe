/**
 * 6.
 * Napisati svoju verziju JS funkcije reduce(). Funkcija prima 3 argumenta:
 * - Niz
 * - Callback funkciju koja će se primijeniti na svaki član niza
 * - Akumulator koji će se vratiti, kao rezultat pozivanja callback funkcije na sve članove niza
 * Za razliku od funkcije map, reduce ne vraća niz rezultata (za svaki element),
 * već jedan zajednički rezultat (akumulator).
 * Primjerice za niz [1, 2, 3, 4, 5] i callback funkciju zbroji(), rezultat funkcije reduce je 15.
 * reduce([1, 2, 3, 4, 5], (acc, elem) => acc + elem, 0);
 */

function reduce(arr, cb, acc) {
	arr.forEach(el => {
		acc = cb(acc, el);
	});

    return acc;
}

module.exports = { reduce };

// console.log(reduce([1, 2, 3, 4, 5], (acc, elem) => acc + elem, 0));
