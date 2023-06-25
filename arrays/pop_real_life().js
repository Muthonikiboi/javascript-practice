
let myArray = [];


function push(element) {
  myArray.push(element);
  console.log(`Pushed ${element} into the array.`);
}


function pop() {
  if (myArray.length === 0) {
    console.log("Array is empty. Cannot perform pop operation.");
    return null;
  } else {
    const element = myArray.pop();
    console.log(`Popped ${element} from the array.`);
    return element;
  }
}


push(10);
push(20);
push(30);
console.log(myArray); 

let poppedElement = pop();
console.log(poppedElement); 

console.log(myArray); 

poppedElement = pop();
console.log(poppedElement); 

console.log(myArray); 

poppedElement = pop();
console.log(poppedElement); 

console.log(myArray); 

pop(); 
