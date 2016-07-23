var names = ['Osameh', 'Sami', 'Mohammed'];
//
// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// })
//
// names.forEach((name) => console.log(name));

// Whatever put in expression automatically returned
// var returnMe = (name) => name + '!';
// console.log(returnMe('Osameh'));

// Fat arrow funcs take parents 'this' binding (in this case it refers to person)
// whereas regular anonymous functions update the 'this' binding (won't refer to parent's binding)
// var person = {
//   name: 'Osameh',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// };
//
// person.greet();

// Challenge area
function add (a, b) {
  return (a + b);
}

// console.log(add(1, 3));
// console.log(add(9, 0))

// addStatement
var addStatement = (a, b) => {
  return (a + b);
}

console.log(addStatement(6, 5));

// addExpression
var addExpression = (a, b) => a + b;

console.log(addExpression(8,5));
