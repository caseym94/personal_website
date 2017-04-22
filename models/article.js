var mongoose = require("mongoose");
var articleSchema = new mongoose.Schema({
    title: String,
    text: String,
    date: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
});

//use this to reorder the seed data from oldest to newest 
//function reorderSeedData() {
//    var newOrder = []
//    for (var i = seedData.length - 1; i >= 0; i--) {
//        newOrder.push(seedData[i]);
//    }
//    return newOrder;
//}

//Article.create(reorderSeedData(), function (err, newlyCreated) {
//    if (err) {
//        console.log(err);
//    } else {
//        console.log(newlyCreated);
//    }
//});

module.exports = mongoose.model('Article', articleSchema);