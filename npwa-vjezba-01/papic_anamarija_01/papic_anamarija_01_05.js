/**
 * 5.
 * Kreirati funkciju pipe() koja prima niz (i to niz funkcija) i jednu vrijednost. Funkcija pipe()
 * vrijednost ubacuje u prvu funkciju u nizu, te njen rezultat ubacuje u drugu funkciju u nizu,
 * pa njen rezultat u treću i tako do zadnje funkcije u nizu. Funkcija pipe() vraća konačni
 * rezultat.
 */

function pipe(arr, val) {
	let result = val;

	arr.forEach(el => {
		result = el(result);
	});

    return result;
}

console.log(pipe([x => x * 10, x => x / 2, x => x - 10], 10));
