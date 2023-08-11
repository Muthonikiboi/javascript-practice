//we ad  a property to an object
function Circle(radius){
    this.radius = radius;
    this.draw=function(){
        console.log('draw');
    };
}
const circle =new Circle(9);
circle.color=("Red");//we added the color and location property 
circle.location={x:0,y:0};

//deleting a property from an exixting object
delete circle.location;