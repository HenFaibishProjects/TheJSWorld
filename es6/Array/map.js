
//Map
var numbers = [1,2,3];
var doubleNumbers = [];

//Es5:

for (var i=0 ; i<numbers.length; i++) {
    doubleNumbers.push(numbers[i] * 2);
}

//Es6:

var double = numbers.map((number) => {
    return number * 2 ;

})

// another example

var cars = [
    {model: 'Mazda' , price :80},
    {model: 'Toyota' , price :90},
    {model: 'Honda' , price :95},
    {model: 'kia' , price :50}
];

//get new array only with the price list
var prices = cars.map(function (car) {
    return car.price;
    
})