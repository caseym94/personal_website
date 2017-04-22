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

router.get('/blog', function (req, res) {
    Article.find({}, null, {
        sort: {
            _id: 1
        }
    }, function (err, articles) {
        if (err) {
            console.log(err);
        } else {
            res.render('blog/index', {
                article: articles
            });
        }
    });
});
//create page
router.get('/blog/new', function (req, res) {
    res.render('blog/new');
});
//create
router.post('/blog', function (req, res) {

    var newArticleInfo = {
        title: req.body.title,
        text: req.body.text,
        date: (function newDate() {
            var d = new Date();
            var fullDate = d.getMonth() + 1 + '/' + d.getDate() + '/' + d.getFullYear();
            return fullDate;
        }()),
        author: {
            id: req.user._id,
            username: req.user.username
        }
    }
    Article.create(newArticleInfo, function (err, newlyCreated) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/blog');
        }
    });
});
//SHOW
router.get('/blog/:id', function (req, res) {
    Article.findById(req.params.id).populate('comments').exec(function (err, foundArticle) {
        res.render('blog/show', {
            article: foundArticle
        });
    });
});
//EDIT  
router.get('/blog/:id/edit', function (req, res) {
    Article.findById(req.params.id, function (err, foundArticle) {
        if (err) {
            console.log(err);
        } else {
            res.render('blog/edit', {
                article: foundArticle
            });
        }
    });
});
//post edits 
router.put('/blog/:id', function (req, res) {
    var newArticleInfo = {
        title: req.body.title,
        text: req.body.text
    }
    Article.findByIdAndUpdate(req.params.id, newArticleInfo, function (err, updatedArticle) {
        if (err) {
            console.log(err);
            res.redirect('/blog');
        } else {
            res.redirect('/blog/' + req.params.id);
        }
    });
});
//DELETE
router.delete('/blog/:id', function (req, res) {
    Article.findByIdAndRemove(req.params.id, function (err, deletedArticle) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/blog');
        }
    });
});
// article comment ROUTES
router.post('/blog/:id/comment', function (req, res) {
    Article.findById(req.params.id, function (err, foundArticle) {
        if (err) {
            console.log(err + 'at create comment');
        } else {
            var commentInfo = {
                text: req.body.text,
                author: {
                    id: req.user._id,
                    username: req.user.username
                }
            }
            Comments.create(commentInfo, function (err, newComment) {
                if (err) {
                    console.log(err);
                } else {
                    foundArticle.comments.push(newComment);
                    foundArticle.save();
                    res.redirect('/blog/' + foundArticle._id);
                }
            });
        }
    });
});

module.exports = router;