//concatination of concat()
var arr1=["C","C++","Java"];
var arr2=["Javascript","Tailwind","React"];
var arr3=["Dart","Kotlin"];
var result=arr1.concat(arr2,arr3);
console.log(result);

//programiz example
 var array1=[1,2,3];
 var array2=[
    [4,5],
    [6,7],
 ];
 var array3=array1.concat(array2);
 console.log(array3);
 //we change the value of 1 to 0
 array1[0]=0;
 console.log(array1);
 //see if there is a chamge in thegeneral array
 console.log(array3);

 //we push a value into one od the arrays in the nested array
 array2[0].push(6);
 console.log(array2);
