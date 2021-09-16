//Every and Some


var computers = [

    {name: 'Apple', ram:'vegetable',price:24} ,
    {name: 'compaq', ram:'fruit',price:4} ,
    {name: 'Acer', ram:'vegetable',price:32}

];

var allComputersCanRunProgram = true;
var onlySumComputersCanRunProgram = false;

//Es5:
for (var i =0 ; i< computers.length; i++) {
    var computer = computers[i];
      if (computer.ram < 16) {
          allComputersCanRunProgram = false;
      }
      else {
          onlySumComputersCanRunProgram = true;
      }
}


//Es6:

computers.every(function (computer) {
    return computer.ram > 16;
});


computers.some(function (computer) {
    return computer.ram > 16;
});

