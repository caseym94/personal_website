var mongoose = require("mongoose");

var videoSchema = new mongoose.Schema({
    title: String,
    link: String
});
//
// Video.find({}).sort({_id: 1}).exec(
//
//        function (err, foundVideos) {
//            if (err) {
//                console.log(err);
//            } else {
//                console.log(foundVideos);
//            }
//        });


module.exports = mongoose.model("Video", videoSchema);