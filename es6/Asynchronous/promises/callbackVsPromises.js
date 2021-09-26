//ES5

var userLeftEs5 = true;
var userRightEs5 = false;

function WatchCallBack(callback,errorCallback) {
    if(userLeftEs5) {
        errorCallback({
           name: 'User Left',
           message: ':('
        })
    } else if (userRightEs5) {
        errorCallback({
            name: 'User Right',
            message: ':('
        })
    } else {
        callback('User Both Hands :) ');
    }

}

WatchCallBack(function (message) {
    console.log('Yayyy ' + message)
},function (error) {

    console.log('this is an Error' + error.name + error.message)
})


//ES6

const userLeftEs6 = true;
const userRightEs6 = false;


function WatchPromise() {
    return new Promise((resolve,reject) => {
    if(userLeftEs6) {
        reject({
            name: 'User Left',
            message: ':('
        })
    } else if (userRightEs6) {
        reject({
            name: 'User Right',
            message: ':('
        })
    } else {
        resolve('User Both Hands :) ');
    }

    })
 }

WatchPromise().then((message) => {
    console.log('Yayyy ' + message)
}).catch((error) => {
    console.log('this is an Error' + error.name + error.message)
})