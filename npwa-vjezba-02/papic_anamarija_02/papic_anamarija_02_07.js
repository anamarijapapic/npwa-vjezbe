/**
 * 7.
 * Kreirati funkciju blackJack koja prima niz (brojevi od 1 do 11) i vraca funkciju (nazovimo je
 * dealer). Funkcija dealer prima dva argumenta (dva broja) i vraca funkciju (nazovimo je player).
 * Ako je funkcija player pozvana PRVI PUT, vraca sumu brojeva koji su argumenti funkcije dealer.
 * Ako je funkcija player pozvana DRUGI PUT, vratiti ce sumu ranija dva argumenta i prvog clana
 * niza, ukoliko je suma manja ili jednaka 21. Ako je veca od 21, funkcija player vraca string „bust!”.
 * Ukoliko prethodna suma nije veca od 21, tada ce se svakim sljedecim pozivom funkcije player
 * vratiti nova suma - zbroj posljednje sume i sljedeceg broja u nizu koji je prosljedjen funkciji
 * blackJack. Ukoliko je nova suma veca od 21, povrat funkcije player je „bust!”. Ako je funkcija
 * player vratila string „bust!”, tada ce svaki sljedeci poziv funcije player vratiti string „You are
 * done!”. Ideja ovog zadatka je koristenje i shvacanje koncepta closure, te ga je obavezno korisit
 */

function blackJack(arr) {
    let i = 0;

    function dealer(num1, num2) {
        let calls = 0;
        let dealerBusts = false;
        let sum = 0;

        function player() {
            ++calls;

            if (dealerBusts) {
                return 'You are done!';
            }

            if (calls === 1) {
                sum = num1 + num2;

                return sum;
            }
            // it appears that the cases calls === 2 and calls > 2
            // described in the exercise text actually follow the same logic
            else {
                sum += arr[i++];

                return sum <= 21 ? sum : (dealerBusts = true, 'bust!');
            }
        }

        return player;
    }

    return dealer;
}

const shuffle = (array) => { 
    return array.sort(() => Math.random() - 0.5); 
}; 

const cards = [...Array(11).keys()].map(el => ++el);

const game = blackJack(shuffle(cards));

console.log('+-------------+\n|   Round 1   |\n+-------------+');
const round1 = game(1, 2);
console.log(round1());
console.log(round1());
console.log(round1());
console.log(round1());
console.log(round1());
console.log(round1());

console.log('+-------------+\n|   Round 2   |\n+-------------+');
const round2 = game(5, 6);
console.log(round2());
console.log(round2());
console.log(round2());
console.log(round2());

console.log('+-------------+\n|   Round 3   |\n+-------------+');
const round3 = game(10, 11);
console.log(round3());
console.log(round3());
console.log(round3());
