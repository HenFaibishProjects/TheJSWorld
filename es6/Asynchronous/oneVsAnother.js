function sync() {
    console.log(`sync count: 1`);
    console.log(`sync count: 2`);
    console.log(`sync count: 3`);
    console.log(`sync count: 4`);
    console.log(`sync count: 5`);
}


console.log(`-------------------------------`);
async function bbb() {
     sleep();
}


function syncAgain() {

    console.log(`sync count: 10`);
    console.log(`sync count: 11`);
    console.log(`sync count: 12`);
    console.log(`sync count: 13`);
    console.log(`sync count: 14`);

}

function sleep() {
    setTimeout(async function () {
        console.log(`Async count: 6`);
        console.log(`Async count: 7`);
        console.log(`Async count: 8`);
        console.log(`Async count: 9`);
    }, 2000);
}

sync();
(async() => {
    await console.log('before start');

    await bbb();

    await console.log('after start');
})();

syncAgain()




