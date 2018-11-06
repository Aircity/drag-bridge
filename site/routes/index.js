var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/*.html', function(req, res, next) {
  const page = path.basename(req.originalUrl, '.html');
  res.render(''+ page, { title: 'Express' });
});

module.exports = router;
