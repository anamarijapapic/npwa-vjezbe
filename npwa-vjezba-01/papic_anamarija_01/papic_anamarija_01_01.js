/**
 * 1.
 * Napisati funkciju vecina() koja kao argument prima niz i callback funkciju. Callback
 * funkcija će vratiti true ili false. Funkcija vecina() će iterirati kroz niz i pozivati callback
 * funkciju nad svakim elementom dokle god se ne može odrediti je li većina elemenata
 * true. Ako je broj true povratnih vrijednosti, manji ili jednak broju false povratnih
 * vrijednosti, funkcija vecina() vraća false. U protivnom vraća true.
 */

function vecina(arr, cb) {
	let counter = 0;

	arr.forEach(el => {
		if (cb(el)) {
        	counter++;
        }

		if (counter > arr.length / 2) {
			return true;
		}
	});

    return counter > arr.length / 2 ? true : false;
}

console.log(vecina([0, 0, 1, 1, 0, 0], x => x === 0));
console.log(vecina([0, 0, 1, 1, 0, 1], x => x === 0));
console.log(vecina([1, 1, 1, 0, 0, 0], x => x === 0));
console.log(vecina([0, 0, 0, 1, 1, 1], x => x === 0));
