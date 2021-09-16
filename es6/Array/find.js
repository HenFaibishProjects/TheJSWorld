//Find

var users = [
    { name : 'Jill' , age: 20},
    { name : 'Alex', age: 30},
    { name : 'Bill', age: 40}

];


var userAge;


Es5:
for (var i =0 ; i< users.length; i++) {
    if (users[i].name === 'Alex') {
        userAge = users[i].age;
        break;
    }
}


//Es6:





function Car(model) {
    this.model = model;
}


var cars = [
     new Car('Mazda'),
     new Car('Toyota'),
     new Car('Ford')
]


cars.forEach(function(entry) {
    console.log(entry);
});