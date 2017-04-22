let express = require('express'),
    app = express(),
    Img = require('../models/img'),
    Video = require('../models/video'),
    User = require('../models/user'),
    Comments = require('../models/comment'),
    Article = require('../models/article'),
    router = express.Router({
        mergeParams: true
    });
router.get('/videos', function (req, res) {
    Video.find({}).sort({
        _id: 1
    }).exec(function (err, foundVideo) {
        if (err) {
            console.log(err);
        } else {
            res.render('Videos', {
                videos: foundVideo
            });

        }
    });
});
module.exports = router;