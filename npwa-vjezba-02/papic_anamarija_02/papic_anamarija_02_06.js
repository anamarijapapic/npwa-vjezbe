/**
 * 6.
 * Kreirati funkciju russianRoulette koja prima jedan argument (broj, nazovimo ga n), i vraca
 * funkciju. Vracena funkcija ne prima argumente, a vraca stirng „click!” prvih n – 1 poziva. Prilikom
 * n-tog poziva, funkcija ce vratiti string „bang”. Svakim sljedecim pozivom funkcije, povratna
 * vrijednost ce biti string „reload to play again”. (hint „closure”)
 */

function russianRoulette(n) {
    let calls = 0;

    function output() {
        ++calls;

        if (n <= 0) {
            return;
        }
        else if (calls < n) {
            console.log('click!');
        } 
        else if (calls === n) {
            console.log('bang');
        }
        else if (calls > n) {
            console.log('reload to play again');
        }
    }

    return output;
}

const game = russianRoulette(5);
game();
game();
game();
game();
game();
game();
