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

router.get('/about', function (req, res) {
    res.render('about');
});


module.exports = router;