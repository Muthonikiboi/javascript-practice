//the array index finds the first occurence of an element searched
var names=['Joy','Lilian','David'];

//if the searched element is in the array we get the index else -1
findname =names.indexOf('Joy');
console.log(findname);

//if no existence of an element
find_name =names.indexOf('Faith');
console.log(find_name);

//the second example with if ...else

const salaries = [1000000, 200000, 30000, 40000];
console.log(salaries.indexOf(1000000));

const salary = salaries.indexOf(40000);

if (salary > -1) {
  console.log("Salary exists");
} else {
  console.log("Salary does not exist");
}
