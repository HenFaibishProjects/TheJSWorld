//ES5


function makeAjaxRequest(url,method) {
    if (!method) {
        method = 'GET';
    }
}

// send get request :
makeAjaxRequest('google.com')

// send post request :
makeAjaxRequest('google.com','POST')





//ES6

function makeAjaxRequest(url,method= 'GET') {

}

// send get request :
makeAjaxRequest('google.com',null)

// send post request :
makeAjaxRequest('google.com','POST')

