//EXAMPLE 1

let names=["Faith","Emmanuel","Elijah","Joy"];
console.log(names);

let popped=names.pop();
console.log(popped);//returns the popped element in the array which is the last array element

//EXAMPLE 2-We use a function together with array pop 
function popping(){
    let arr=["a", "b", "c", "d", "e"];
    console.log(arr);
    console.log(arr.pop());
}
popping();