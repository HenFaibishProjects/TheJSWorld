

function createBookShop(inventory,employee) {
    return {
        employee ,
        inventory,
            inventoryValue() {
            let sum = 0;
            inventory.forEach((price) =>
                sum += price.price
            );
                return sum;

            } ,

        employeeAvarageAge() {
            let sum = 0
         employee.forEach((ageA) =>
             sum += (ageA.age))
             return sum/employee.length;

    }
     }
  };


let inventory = [
    { title: 'Harry Potter1' , price: 90} ,
    { title: 'Harry Potter2' , price: 110} ,
    { title: 'Harry Potter3' , price: 85} ,
    { title: 'Harry Potter4' , price: 95} ,
    { title: 'Harry Potter5' , price: 90}
];

let employee = [
    {name:'avi', age:30},
    {name:'eli', age:35},
    {name:'dani', age:25},
    {name:'yossi', age:40},
    {name:'asi', age:42}
];


const bookShop = createBookShop(inventory,employee);

console.log(`bookShop avarage emp age is ${bookShop.employeeAvarageAge()} and the invertory value is ${bookShop.inventoryValue()}`);