(()=> {

let avenger: any = 123;
let exists;
let power;

avenger = 'Dr Strange';
console.log((avenger as string).charAt(0));


avenger = 150.265596548;
console.log(<number>avenger.toFixed(2));

})()