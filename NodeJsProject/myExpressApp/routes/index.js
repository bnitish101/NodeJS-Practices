var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pug/index', { title: 'Express' });
  // res.send('respond with a Home Page');
  // res.renderFile( 'index.html');
  // res.sendFile( 'C:/xampp/htdocs/myprojects/NodeJS/NodeJsProject/myExpressApp/views/index.html');
  // res.sendFile(express.static(__dirname + '/views/index.html'));
  console.log('cb+......');
  console.log(express.static(__dirname + '/public'));
  // app.use(express.static(__dirname + '/public'));
});
// app.get('/myRoute', function(request, response) {
//   response.sendFile( 'index.html'); //Since we have configured to use public folder for serving static files. We don't need to append public to the html file path.
// });

module.exports = router;
