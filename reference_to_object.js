var nio = {
    favFood:'Bacon',
    favMovie:'Chappie'
};
console.log(nio.favFood);
var person = nio;
console.log(person.favFood);
console.log(nio.favFood);

person.favFood = 'Salad'; // since 'person' reference to 'nio' hance we are changing nio's favFood
console.log(nio.favFood);

console.log(10 == '10'); // true
console.log(10 === '10'); // false srtict comparision