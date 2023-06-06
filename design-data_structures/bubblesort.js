//staring with our array

const arr= [23,67,45,98,12,4,7,89] ;
//pass1  -23,45,67,12,4,7,89,98
//pass2  -23,45,12,4,7,67,89,98
//pass3  -23,12,4,7,45,67,89,98
//pass4  -12,4,7,23,45,67,89,98
//pass5  -4,7,12,23,45,67,89,98

function  bubblesort(arr){  //func
    const len = arr.length; //declares len and assigns the length of the array

    for(let i=0; i<len; i++){ //starts loop that iterates from0to length of the array
        for(let j=0; j<len; j++){ //
            if (arr[j] > arr[j+1]){//checks if current element at j is greater thanthat ib index [j+1]
                //means they are out of order and need to be swapped
                //incharge of swapping in bubble sort
                const temp= arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        console.log("Pass",i+1,":",arr);
    }
    return arr;//returns the sorted array
}

console.log(arr); //array before sorting
bubblesort(arr);  //func call
console.log(arr);  //array after sorting


//EXAMPLE 2:ON BUBBLE SORT
const array=[12,90,89,56,45,90,34];
function bubble(array){
    const length =array.legth;

    for(let i=0; i<length; i++){
        for(let j=0; j<length; j++){
            if( array[j] > array[j+1]){
                const index = array[j];
                array[j] = array[j+1];
                array[j+1] = index
            }
        }
    }
    return(array);
}



console.log(array);
bubble(array);
console.log(array);