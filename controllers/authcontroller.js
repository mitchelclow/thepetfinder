// Controllers for signup and signin routes
var exports = module.exports = {}

exports.signup = function(req, res) {
    res.render('signup');
};

exports.signin = function(req, res) {
  res.render('signin');
}
