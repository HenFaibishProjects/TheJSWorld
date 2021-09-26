let promise = new Promise((resolve,reject) => {
    reject();

});


promise.then(() => {
    console.log("resolve")
}).then(() => {
    console.log("resolve again").catch(() => {
        console.log("rejected")
    });
});