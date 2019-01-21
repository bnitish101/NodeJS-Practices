var file_system = require('fs'); // "file system" module in build module of nodejs
var path = require('path'); // "path" module in build module of nodejs
// file_system.writeFileSync('Corn.txt', 'This is corn text file contents!!'); //this will create new text file
console.log(file_system.readFileSync('Corn.txt').toString());

var websiteHome = 'User\/\\//Desktop//\/\///Nio\\/\index.html';
var websiteAbout = 'User/Desktop/Nio/about.html';

console.log(path.normalize(websiteHome)); // normalize method formates a valid path

console.log(path.dirname(websiteAbout)); // directory
console.log(path.basename(websiteAbout)); // file name
console.log(path.extname(websiteAbout)); // extention name

setInterval( function(){ console.log( 'Hi Nio, What\'s going on!!! To break press \'ctrl+c\'' ); }, 2000 ); // infinite loop with 2 seconds of interval

console.log(__dirname); // current directory 
console.log(__filename); // current directory with file name & extention