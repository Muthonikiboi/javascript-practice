const bubbling=[12,90,89,56,45,90,34];

function bubble(bubbling){
    const len =bubbling.length;

    for(let i=0;i<len-i-1;i++){
        for(let j=0 ;j<len;j++){
            if(bubbling[j] > bubbling[j+1]){
                const temp = bubbling[j];
                bubbling[j] = bubbling[j+1];
                bubbling[j+1] = temp;
            }
        }
        console.log("pass",i+1,":",bubbling);
    }
    return bubbling;
}

console.log("Unsorted array: "+bubbling);
bubble(bubbling);
console.log("Sorted array: "+bubbling);
