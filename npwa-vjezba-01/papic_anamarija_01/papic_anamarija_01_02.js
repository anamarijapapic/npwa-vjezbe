/**
 * 2.
 * Napisati funkciju prioritiziraj() koja prima niz i callback. Callback funkcija će vratiti true ili
 * false. Funkcija prioritiziraj() će iterirati kroz niz i pozvati callback funkciju nad svakim
 * elementom. Funkcija prioritiziraj() će vratiti novi niz u kojem su u prvom dijelu niza svi oni
 * elementi za koje je callback vratila true, a u drugom dijelu svi oni elementi za koje je
 * callback funkcija vratila false.
 * Proučiti funkciju Array.unshift().
 */

function prioritiziraj(arr, cb) {
	let result = [];

	arr.forEach(el => {
		cb(el) ? result.unshift(el) : result.push(el);
	});

	return result;
}

console.log(prioritiziraj([0, 0, 1, 1, 0, 0], x => x === 0));
