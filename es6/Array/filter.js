//Filter
var filterredProducts = [];

var products = [

    {name: 'cucmber', type:'vegetable',price:10} ,
    {name: 'banana', type:'fruit',price:15} ,
    {name: 'celery', type:'vegetable',price:13} ,
    {name: 'orange', type:'fruit',price:19} ,
    {name: 'apple' ,type:'fruit',price:23}

];

//Es5:
for (var i =0 ; i< products.length; i++) {
    if(products[i].type==='fruit') {
        filterredProducts.push(products[i])
    }
}


//Es6:


products.filter(product => product.type==='fruit' && product.price<20);


