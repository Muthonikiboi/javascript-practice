//Using factory function
function createCircle(radius) {//we 
    return {
        radius: radius, // property based on parameter
        draw: function() { // method
            console.log('draw');
        }
    };
}
const circle = createCircle(1);
circle.draw();

//example2 object factories

const createSchool=function(name,noOfStudents,location){
    let school={//we can also use as the code above but we do not return the value at the end.
        name:name,
        noOfStudents:noOfStudents,
        location:location,
        display(){
            console.log(`My school is ${this.name} which is located at ${this.location} with a population of ${this.noOfStudents} students.`);
        },
    };
    return school;
};
const school=createSchool("Dedan Kimathi University","10,099","Nyeri,Kenya");
console.log(school);


// Using constructor function
function Circle2(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    };
}

const circle2 = new Circle2(1);
circle2.draw();
