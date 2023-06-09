const arr= [-5,7,-6,-2,1,3,8,4];


function sort_squares(arr){
    const len=arr.length;

    for (let i=0; i<len; i++){
        for (let j=0; j<len; j++){
            if(arr[j]>arr[j+1]){
                const temp =arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
            }
        }
    }
    return arr;
}

sort_squares(arr);

function squares(el){ 
    console.log(el*el);
}
arr.forEach(squares);