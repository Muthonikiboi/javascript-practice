//literal
var x=["joy","Emmanuel","muthoni","Getange"];
console.log(x);
for(i=0;i<4;i++){
    console.log(x[i]);
}
//literal using .length
var p=["Babygirl","Babyboy","Mom","dad"];
console.log(p);
for(t=0;t<p.length;t++){
    console.log(t,p[t]);
}
//by using new keyword
var m;  
var emp = new Array();  
emp[0] = "Arun";  
emp[1] = "Varun";  
emp[2] = "John";  
  
for (m=0;m<emp.length;m++){  
console.log(emp[m]);  
}  

//using constructor
console.log("Our siblings are:"); 
var u=new Array("Faith","Elijah","Lilian","David");

for(s=0;s<u.length;s++){
    console.log(s,u[s]);
}

