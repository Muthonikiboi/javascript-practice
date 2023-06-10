function linearSearch(s,x){
    for(var i=0;i<s.length;i++){
        if(s[i]===x){
            return i;//if the element to be searched exists.
        }
    }
    return false;//if the element to be searched is not existing in the sequence. 
}

const arr = [1,3,5,6,13,7,9];
const tbs = 13;
const index = linearSearch(arr ,tbs);
console.log(index);


//linear search

function Workers(z,y){
    for (var i=0;i<z.length;i++){
        if (y===z[i]){
            return true;
        }
    }
    return false;
}

const array =["Joy","Lilian","David","Emmanuel","Faith","Elijah"];
const find="Faith";
const ind = Workers(array,find);
console.log(ind);