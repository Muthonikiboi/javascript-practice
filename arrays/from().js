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
  