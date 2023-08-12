/*
const heightMark=1.69;
const heightJohn=1.95;
const massMark=78;
const massJohn=92;

const calcMarkBMI=massMark/heightMark**2;
const calcJohnBMI=massJohn/heightJohn**2;

console.log("John's BMI is "+calcJohnBMI,"Mark's BMI is "+calcMarkBMI);

const markHigherBMI=(calcMarkBMI>calcJohnBMI);
console.log(markHigherBMI);
*/

const heightMark=1.69;
const heightJohn=1.95;
const massMark=78;
const massJohn=92;

const MarkBMI=massMark/(heightMark*heightMark);
const JohnBMI=massJohn/(heightJohn*heightJohn);

console.log("John's BMI is "+JohnBMI,"Mark's BMI is "+MarkBMI);

const markHigherBMI=(MarkBMI>JohnBMI);
console.log(markHigherBMI);