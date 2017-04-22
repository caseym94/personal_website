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

router.get('/sketchbook', function (req, res) {
    Img.find({}, null, {
        sort: {
            _id: 1
        }
    }, function (err, allImgs) {
        //sort not necessary for finding and displaying, puts them in order by _id given
        if (err) {
            console.log(err);
        } else {
            res.render('SketchBook', {
                img: allImgs
            });
        }
    });
});
module.exports = router;