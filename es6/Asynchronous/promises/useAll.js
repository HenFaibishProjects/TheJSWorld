const RecordVideo1 = new Promise((resolve,reject) => {
    resolve('Video 1 Recorded');
});
const RecordVideo2 = new Promise((resolve,reject) => {
    resolve('Video 2 Recorded');
});
const RecordVideo3 = new Promise((resolve,reject) => {
    resolve('Video 3 Recorded');
});

//Wait for everything to complete
Promise.all([
    RecordVideo1,
    RecordVideo2,
    RecordVideo3
]).then((messages) =>  {
    console.log(messages);
})

//Wait for the first one to complete
Promise.race([
    RecordVideo1,
    RecordVideo2,
    RecordVideo3
]).then((messages) =>  {
    console.log(messages);
})