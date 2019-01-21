var movie = require('./movies');
movie.favMovie = 'Chappie';
console.log('From emily module: Emily\,s favorite movie is: '+movie.favMovie);

module.exports.emilyFavMovie = movie.favMovie;