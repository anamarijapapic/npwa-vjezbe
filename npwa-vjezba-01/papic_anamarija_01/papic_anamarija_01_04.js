/**
 * 4.
 * Kreirati funkciju komutativnost() koja prima dvije callback funkcije i vrijednost. Funkcija
 * komutativnost() će vratiti true ako prosljeđivanje vrijednosti u prvu callback funkciju i
 * onda prenošenje rezultirajuće vrijednost u drugu funkciju, daje isti rezultat kao
 * prenošenje vrijednosti u drugu funkciju i prosljeđivanje rezultirajuće vrijednosti u prvu
 * funkciju.
 */

function komutativnost(cb1, cb2, val) {
    return cb2(cb1(val)) === cb1(cb2(val));
}

console.log(komutativnost(x => x * 2, x => x / 5, 10));
console.log(komutativnost(x => x - 2, x => x / 5, 10));
