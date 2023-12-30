/**
 * 2.
 * Napisati funkciju movieSelector koja prima niz objekata koji sadrze informacije o filmovima (id,
 * title i score). Iskoristiti funkcije filter i map kako bi povrat funkcije movieSelector bio niz koji
 * sadrzi samo imena filmova sa score-om vecim od pet i to uppercase-ane. Primjer za objekt
 * movies = [ { id: 1, title: "Pan's Labyrinth", score: 9 },
 * { id: 37, title: "Gentleman", score: 6 },
 * { id: 11, title: "Batman", score: 5 },
 * { id: 44, title: "Birds of Prey", score: 1 },];
 * ocekivani rezultat je: [ "PAN'S LABYRINTH", "GENTLEMAN" ]
 */

function movieSelector(arr) {
    return arr
        .filter(el => el.score > 5)
        .map(el => el.title.toUpperCase());
}

const movies = [
    { id: 1, title: "Pan's Labyrinth", score: 9 },
    { id: 37, title: "Gentleman", score: 6 },
    { id: 11, title: "Batman", score: 5 },
    { id: 44, title: "Birds of Prey", score: 1 }
]

console.log(movieSelector(movies));
