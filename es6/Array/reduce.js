
//Reduce


const numbers = [1, 2, 3, 4, 5, 6, 7];
let sum = 0;

//Es5:

for (let i =0 ; i< numbers.length; i++) {
    sum+=numbers[i];
};

//Es6:

numbers.reduce(function (sum,number) {
    return sum + number ;
} , 0);
