//from array returns an array of indicated string
let myName=Array.from("JoyElizabeth Muthoni Kiboi");

console.log(myName);




// function that returns a new array
function createArray(arraylike, mapFunc) {
    return Array.from(arraylike, mapFunc);
  }
  
  // using arrow function for mapFunc
  let result = createArray(["David", "Lilian", "Joy"], (element) => element + " Kiboi");
  
  console.log(result);
  

  //example3
  let mySchool=Array.from("Dedan Kimathi University of Technology");
  console.log(mySchool);


const words = ['apple', 'banana', 'cat', 'dog', 'elephant'];

// Filter words with more than 3 characters
const longWords = words.filter(word => word.length > 3);
console.log(longWords); 

const wordsWithA = words.filter(word => word.includes('a'));
console.log(wordsWithA); 
