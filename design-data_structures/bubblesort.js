//staring with our array

const arr= [23,67,45,98,12,4,7,89] ;
//pass1  -23,45,67,12,4,7,89,98
//pass2  -23,45,12,4,7,67,89,98
//pass3  -23,12,4,7,45,67,89,98
//pass4  -12,4,7,23,45,67,89,98
//pass5  -4,7,12,23,45,67,89,98

function  bubblesort(arr){
    const len = arr.length;

    for(let i=0; i<len; i++){
        for(let j=0; j<len; j++){
            if (arr[j] > arr[j+1]){
                const temp= arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log(arr);
bubblesort(arr);
console.log(arr);