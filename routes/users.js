const router = require('express').Router();
const usersController = require('../controllers/users')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



module.exports = router;
