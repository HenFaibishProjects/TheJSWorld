//ES5
var expenseEs5 = {
    type: 'Business' ,
    amount: '45 USD'
};

var typeEs5 = expenseEs5.type ;
var amountEs5 = expenseEs5.amount;





//ES6

let expenseEs6 = {
    type: 'Business' ,
    amount: '45 USD'
};
// I want to declare a new variable name type
// and I want it to be equal to expenseEs6.type
const { type } = expenseEs6;

// I want to declare a new variable name amount
// and I want it to be equal to expenseEs6.amount
const { amount } = expenseEs6;

// Combine

const { type,amount } = expenseEs6;