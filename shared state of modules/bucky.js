var movie = require('./movies');
console.log('From bucky module: Bucky\'s favorite movie is: '+movie.favMovie);

module.exports.buckyFavMovie = movie.favMovie;