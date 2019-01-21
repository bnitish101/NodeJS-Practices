// "this" keyword reference to whatever thing is calling it.
var Nio = {
    firstName: function(){
        console.log('Hi! My name is Nio.');
        console.log(this===Nio); // true
        // console.log(this.firstName);
        // console.log(this);
    }
};
Nio.firstName(); // Here "Nio" calling "firstName" object
Nio1=Nio; // Here "Nio" calling "firstName" object


Nio1.firstName = 'Referencing new variable!!'; // Here "Nio" calling "firstName" object
Nio.firstName; // Here "Nio" calling "firstName" object
console.log('\n'+Nio.firstName);
console.log('\n'+Nio1.firstName);

Nio1.firstName = function(){
    console.log('Referencing new function!!'); // Here "Nio" calling "firstName" object
    console.log(this===Nio); // confusion is here
};
Nio1.firstName();
// The default calling context is "global"
function doSomethingWorthless(){
    console.log('\nI am doing something worthless here!!');
    console.log(this===global); // true
    // console.log(this);
}
doSomethingWorthless();