var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('pug/contact', { title : 'Contact', myobj : 'Anything'});
});
module.exports = router;