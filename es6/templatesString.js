// es5

function getMessageEs5() {
    const year = new Date().getFullYear();
    return "The year is " + year;

}

getMessageEs5();




// es6


function calc() {
    return 2022
}

function getMessageEs6() {
    const year = new Date().getFullYear();
    console.log(`The year is ${year}`);

}

function getMessageEs6N() {
    const year = new Date().getFullYear();
    console.log(`The year is ${new Date().getFullYear()}`);

}

function getMessageEs6N1() {
    const year = new Date().getFullYear();
    console.log(`The year is ${calc()}`);

}



getMessageEs6N1();