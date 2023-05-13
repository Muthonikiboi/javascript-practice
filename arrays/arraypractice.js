//FILTER
//to filter even numbers
const numbers=[1,2,3,4,5,6,7,8,9,10];
const evenNumbers=numbers.filter(numbers=>numbers%2===0);
console.log(evenNumbers);

//numbers greater than 5
const greaterNumbers=numbers.filter(numbers=>numbers >5);
console.log(greaterNumbers);

//to filter names and items

const products =[
    { id: 1, name: 'Product 1', category: 'Category A' },
    { id: 2, name: 'Product 2', category: 'Category B' },
    { id: 3, name: 'Product 3', category: 'Category A' },
    { id: 4, name: 'Product 4', category: 'Category C' },
    { id: 5, name: 'Product 5', category: 'Category B' },
    { id: 6, name: 'Product 6', category: 'Category A' },
    { id: 7, name: 'Product 7', category: 'Category B' },
    { id: 8, name: 'Product 8', category: 'Category C' },
    { id: 9, name: 'Product 9', category: 'Category A' },
    { id: 10, name: 'Product 10', category: 'Category B' },
    { id: 11, name: 'Product 11', category: 'Category A' },
    { id: 12, name: 'Product 12', category: 'Category C' },
    { id: 13, name: 'Product 13', category: 'Category B' },
    { id: 14, name: 'Product 14', category: 'Category A' },
    { id: 15, name: 'Product 15', category: 'Category B' },
    { id: 16, name: 'Product 16', category: 'Category C' },
    { id: 17, name: 'Product 17', category: 'Category A' },
    { id: 18, name: 'Product 18', category: 'Category B' },
    { id: 19, name: 'Product 19', category: 'Category A' },
    { id: 20, name: 'Product 20', category: 'Category C' }
]

function Product(item){
    if(item.category ==="Category A"){
        return true;
    }else{
        return false;
    }
}

let category=products.filter(Product);
console.log(category);



/*this is your mistake
const items = products.filter(products.category === 'Category C');
console.log(items); */