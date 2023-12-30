/**
 * 16.
 * Promisi su asinkroni i sada ćemo to i dokazati. Kreirati promise koji će se resolve-ati sa
 * vrijednošću „Promise has been resolved!“. Nakon toga ubaciti sljedeći kod:
 * promise.then(() => console.log('Promise has been resolved!'));
 * console.log("I'm not the promise!");
 * Koji redosljed ispisa očekujete? Zašto?
 */

const promise = new Promise((resolve, reject) => {
    resolve('Promise has been resolved!');
});

promise.then(() => console.log('Promise has been resolved!'));
console.log("I'm not the promise!");

// Ispis:
// I'm not the promise!
// Promise has been resolved!
// Razlog: Ispis je ovakav jer je promise asinkroni. 
// Prvo se ispiše console.log("I'm not the promise!") jer je on sinkroni,
// a nakon toga se ispiše promise.then(() => console.log('Promise has been resolved!')); jer je on asinkroni.
