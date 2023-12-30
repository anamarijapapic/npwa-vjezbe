/**
 * 15.
 * Kreirati promise koji će se odmah reject-ati. Iz funkcije koja se pozvala kada je promise reject-an
 * printati „Error“(hint. nad promise objektom pozvati metodu catch).
 */

const promise = new Promise((resolve, reject) => {
    reject();
});

promise.catch(() => {
    console.log('Error');
});
