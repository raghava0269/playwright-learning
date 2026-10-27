// variables
let guestname='Ravi';
 guestname='Kiran';
const nights=5;
const isPaid= true;
const PricePerNight=7500;
const email='Ravi@Gmail.com';

console.log(guestname);
console.log(nights);
console.log(isPaid);
console.log(PricePerNight);
console.log(nights+PricePerNight);
console.log(email);

//datatypes
console.log(typeof guestname);
console.log(typeof nights);
console.log(typeof isPaid);

//Template literal
console.log(`${guestname} pays ${PricePerNight} rupees for ${nights} nights `);

//string methods
console.log(guestname.toUpperCase());
console.log(guestname.toLowerCase());
console.log(guestname.length);
console.log(email.toLowerCase());