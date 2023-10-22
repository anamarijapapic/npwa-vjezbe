/**
 * 9.
 * Napisati svoju izvedbu funkcije filter(). Funkcija prima dva argumenta:
 * - Ulazni niz
 * - Callback funkciju koja će se primijeniti na svaki element ulaznog niza, te će
 * vratiti true ili false, na osnovu čega će se element odati u povratni niz
 * (odnosno neće).
 * Funkcija vraca povratni niz sa elementima koji su prosli filtriranje.
 */

function filter(arr, cb) {
    let result = [];

	arr.forEach(el => {
		if (cb(el)) {
            result.push(el)
        }
	});

	return result;
}

console.log(filter([1, 2, 3, 4, 5], x => x % 2 === 0));
