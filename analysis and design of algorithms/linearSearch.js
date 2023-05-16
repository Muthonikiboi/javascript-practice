function linearSearch(s,x){
    for(var i=0;i<s.length;i++){
        if(s[i]===x){
            return i;//if the element to be serached exists.
        }
    }
    return false;//if the element to be searched is not existing in the sequence. 
}

const arr = [1,3,5,6,13,7,9];
const tbs = 8;
const index = linearSearch(arr ,tbs);
console.log(index);

