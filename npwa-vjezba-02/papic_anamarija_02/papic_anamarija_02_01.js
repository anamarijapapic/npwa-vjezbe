/**
 * 1.
 * Napisati funkciju koja vraca funkciju after i prima dva argumenta. Prvi argument je broj koji
 * predstavlja koliko puta funkcija after treba biti pozvana prije nego se izvrsi callback funkcija,
 * a drugi argument je callback funkcija koja ce se izvrsiti. (hint closure)
 */

function myFunction(num, cb) {
    for (i = 0; i < num; i++) {
        after();
    }

    cb();

    return after;
}

function after() {
    console.log(`Calling: ${after.name}`);
}

function callback() {
    console.log(`Calling: ${callback.name}`);
}

myFunction(0, callback);
myFunction(5, callback);
