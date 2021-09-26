// *****REST****

function addNumbers(number) {
    return  number.reduce((sum,number)  => {
        return sum+number;
        } , 0);
}


function addNumbersWithRest(...number) {
    return  number.reduce((sum,number)  => {
        return sum+number;
    } , 0);
}


//send array
addNumbers([1, 2, 3, 4, 5, 6, 7]);


//send numbers
addNumbersWithRest(1, 2, 3, 4, 5, 6, 7);


//*****SPREAD*****

const defaultColors = ['red','green','yellow'];
const additionalColors = ['orange','blue'];
const specialColors = ['fire red', 'fall orange']

// join two arrays (ES5):
defaultColors.concat(additionalColors);


// join two arrays (ES6):
[...defaultColors, ...additionalColors];

[... specialColors ,...defaultColors, ...additionalColors];

['black' ,... specialColors ,...defaultColors, ...additionalColors];


// Mixed REST & SPREAD

function shopList(...items) {
    if (items.indexOf('milk') < 0) {
        return ['mink', ... items];
    }
    return items;
}

//will be added the milk
shopList('oranges','bread','eggs');