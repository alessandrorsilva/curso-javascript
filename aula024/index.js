let umaString = "Um \"texto\"";
console.log(umaString);

//                   01234567
let segundaString = "Um texto";
console.log(segundaString[4]); // e
console.log(segundaString[8]); //undefined
console.log(segundaString.charAt(7));
console.log(segundaString.concat(' adicionado'));
console.log(segundaString + ' adicionado');
console.log(`${segundaString} adicionado`);
console.log(segundaString.indexOf('texto'));
console.log(segundaString.indexOf('m', 1));
console.log(segundaString.lastIndexOf('x'));

let outraString = 'O rato roeu a roupa do rei de roma.';
console.log(outraString.replace(/r/g, 'l'));
console.log(outraString.length);
console.log(outraString.slice(2, 6));
console.log(outraString.split(' ', 3));
console.log(outraString.toUpperCase());
console.log(outraString.toLowerCase());