//EXAMPLE 2:ON BUBBLE SORT
const array=[12,90,89,56,45,90,34];

function bubble(array){

    for(let i=0; i<array.length; i++){
        for(let j=0; j<array.length-i-1; j++){
            if( array[j] > array[j+1]){

                const index = array[j];
                array[j] = array[j+1];
                array[j+1] = index
            }
        }
    }
    return(array);
}



console.log("This is the unsorted array :"+array);
let sortedArray = bubble(array);
console.log("The sorted array is :"+sortedArray)
