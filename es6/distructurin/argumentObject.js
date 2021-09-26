//ES5
var savedFile = {
    type: 'jpg' ,
    name: 'repost' ,
    size: 1414
};

function fileSummery(file) {
    return `The file ${file.name} is ${file.type} type and has ${file.size} size`
}


fileSummery(savedFile);



//ES6

function fileSummeryEs6({type,name,size}) {
    return `The file ${name} is ${type} type and has ${size} size`
}


fileSummeryEs6(savedFile);