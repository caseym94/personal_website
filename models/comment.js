var mongoose = require("mongoose");
var commentSchema = new mongoose.Schema({
    text: String,
    date: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    }
});
//var commentSeedData = {
//text: "yo wadup",
//date: "3/25/2017"
//}
//Comment.create(commentSeedData, function (err, newComment) {
//    if (err) {
//        console.log(err);
//
//    } else {
//        console.log("created new comment" + newComment);
//    }
//});
module.exports = mongoose.model("Comment", commentSchema);