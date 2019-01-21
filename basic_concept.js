// --------- satrt object declare -------- //
var info= {
    first_name : 'Nio',
    last_name : 'Thries',
    professoin : 'Software Engineer'
};
console.log(info);
// --------- end object declare -------- //
// --------- start basic function -------- //
function add(a,b){
    return 'Addition of '+a+' & '+b+' is '+(a+b);
}
console.log(add(2,3));
// --------- end basic function -------- //
// --------- start nodejs function without name -------- //
var details = function (){
    console.log ('Hi! this is my first nodejs spacial function or annonymus function!');
};
console.log(details);
// details();
setTimeout(details, 5000); // we can call the function as variable in another function
// --------- end nodejs function without name -------- //
