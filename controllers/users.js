const User = require('../models/user');
const Roast = require('../models/roast');

module.exports = {
    index,
    privateView,
   
};

function index(req, res, next) {
    User.find({}, function(err, foundUsers) {
        foundUsers,
        res.render('users/index', {
        user: req.user,
        title: 'Coffee Roasting Log'
            });    
        });
    }

function privateView(req, res) {
    res.send("You found something private");
}



