/**
 * 13.
 * Koristeći async await pattern, ispisati rečenicu koja se sastoji od imenice i glagola. Pozvati async
 * funkciju i prosljediti joj imenicu. Unutar async funkcije koristiti ključnu riječ await kako bi se
 * dobio povrat iz ne-async-funkcije koja prima imenicu i konkatenira hardkodirani glagol i to vraća.
 * Povrat ispisati nakon tri sekunde.
 */

async function asyncFunc(noun) {
    const verb = await nonAsyncFunc(noun);
    console.log(`${noun} ${verb}`);
}

function nonAsyncFunc(noun) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('codes');
        }, 3000);
    });
}

asyncFunc('Student');
