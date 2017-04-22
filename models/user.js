var mongoose = require("mongoose"),
    passportLocalMongoose = require("passport-local-mongoose");

var userSchema = new mongoose.Schema({
    username: String,
    password: String
});
userSchema.plugin(passportLocalMongoose);
//applies passportLocalMongoose methods to userSchema

//var userData = {
//        username: "Caseym94",
//        password: "thomas55",
//        name: "Casey Monaghan",
//        email: "caseymonaghan94@gmail.com",
//        age: "22"
//    }
//user.create(userData, function(err, newUser){
//   if(err){
//       console.log(err);
//   } else{
//       console.log(newUser);
//   }
//});
// 
module.exports = mongoose.model('User', userSchema);