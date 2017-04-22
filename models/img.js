var mongoose = require("mongoose");

var ImgSchema = new mongoose.Schema({
    id: Number,
    big: String,
    medium: String,
    small: String
});

//Img.create(seedImgs, function(err, newImgs){
//   if(err){
//       console.log(err);
//   } else{
//       console.log("Imgs successfully added!")
//       console.log(newImgs);
//   }
//});

module.exports = mongoose.model('Img', ImgSchema);
