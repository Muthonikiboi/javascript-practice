/*   //we are using bubbling-we mobe from core to the outside
document.getElementById("div2").addEventListener("click",function(){
    alert("You clicked the gray circle");
},false);
document.getElementById("div1").addEventListener("click",function(){
    alert("You clicked the black circle");
},false);
*/
//we are in capturing -from outside to inside (core)
document.getElementById("div4"),addEventListener("click",function(){
    alert("You clicked the purple circle");
},true);
document.getElementById("div3"),addEventListener("click",function(){
    alert("you clicked the pink circle");
},true); 