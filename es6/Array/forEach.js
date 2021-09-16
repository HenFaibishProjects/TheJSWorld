
//ForEach

var colors = ['red','blue','green'];
var numbers = [1,2,3,4,5,6,7];
var sum = 0;

//Es5:
  for (var i =0 ; i< colors.length; i++) {
      console.log(colors[i]);
}

//Es6:
     colors.forEach(function (color) {
         console.log(color);
     });


        function adder(number) {
            sum += number;
        }
        numbers.forEach(adder);