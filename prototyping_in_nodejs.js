// protyping gives you the ability to do is you can add cool methodes or properties to objects in class
function User(){
    this.name="";
    this.life=100;
    this.gavelife = function(targatePlayer){
        targatePlayer.life +=1;
        console.log(this.name+' gave 1 life to '+targatePlayer.name+'.');
    }
}
bucky = new User();
wendy = new User();

bucky.name = 'Bucky';
wendy.name = 'Wendy';

bucky.gavelife(wendy);

console.log(bucky.name+' is '+ bucky.life);
console.log(wendy.name+' is '+wendy.life);

// you can add function/methods to all objects
User.prototype.uppercut = function(targatePlayer){
    targatePlayer.life -=3;
    console.log(this.name+' just upppercuted 3 life of '+targatePlayer.name);
}
wendy.uppercut(bucky);

console.log(bucky.name+' is '+ bucky.life);
console.log(wendy.name+' is '+wendy.life);

// you can add properties to all objects
User.prototype.magic = 60;
console.log(bucky.name+' is '+ bucky.magic);
console.log(wendy.name+' is '+wendy.magic);