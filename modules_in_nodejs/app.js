// breaking up codes in differnt files are called modules
var movie = require('./movies');
var movie1 = require('./movies.1');
console.log(movie.avatar);
movie.avatar();
movie1.printAvatar();
movie1.printChappie();