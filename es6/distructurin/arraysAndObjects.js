//ES5

var companies = [
    {name:'Google',location:'LA' } ,
    {name:'Facebook',location:'California' } ,
    {name:'Uber',location:'Boston' }
];

var location = companies[0].location;
location;


//ES6

const [{locationEs6}] = companies;
locationEs6


const google = {
    locations: ['Tel-Aviv','LA','London']
};

const [locations1] = google; //get all location list

const {locations2} = google; //get first location list
