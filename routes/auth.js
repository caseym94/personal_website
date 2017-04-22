let express = require('express'),
    app = express(),
    Img = require('../models/img'),
    Video = require('../models/video'),
    User = require('../models/user'),
    Comments = require('../models/comment'),
    Article = require('../models/article'),
    passport = require("passport"),
    router = express.Router({
        mergeParams: true
    });
router.get('/signup', function (req, res) {
    res.render('auth/signup');
});

router.post('/Signup', function (req, res) {
    //the 2nd argument encrypts password instead
    User.register(new User({
        username: req.body.username
    }), req.body.password, function (err, newUser) {
        if (err) {
            console.log(err);
            return res.redirect('/Signup');
        }
        passport.authenticate('local')(req, res, function () {
            //passport.authenticate logs the user in, stores the session, runs serialize User
            res.redirect('/blog');
        });
    });
});
//login ROUTES
router.get('/login', function (req, res) {
    res.render('auth/login');
});
router.post('/login', passport.authenticate('local', {
    //given to us with passport-local-mongoose
    successRedirect: '/blog',
    failureRedirect: '/login'
}), function (req, res) {});
router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/blog');
});

module.exports = router;