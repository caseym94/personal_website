let express = require('express'),
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    methodOverride = require('method-override'),
    passport = require('passport'),
    LocalStrategy = require('passport-local'),
    passportLocalMongoose = require('passport-local-mongoose'),
    expressValidator = require('express-validator'),
    //require models
    Img = require('./models/img'),
    Video = require('./models/video'),
    User = require('./models/user'),
    Comments = require('./models/comment'),
    Article = require('./models/article'),
    //require routes 
    authRoutes = require('./routes/auth'),
    blogRoutes = require('./routes/blog'),
    sketchBookRoutes = require('./routes/sketchbook'),
    videoRoutes = require('./routes/videos'),
    aboutRoutes = require('./routes/about');

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: false
}));
//connects to your mongodb locally
mongoose.connect('mongodb://localhost/myapp');
//mongoose.connect('mongodb://casey:thomas55@ds145039.mlab.com:45039/personalwebsite');
app.use(methodOverride('_method'));
// authentication
app.use(require('express-session')({
    secret: 'nutella sandwiches',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//aplies currentUser variable to all; 
app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    next();
});
//middleware
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('login');
}
app.use(authRoutes);
app.use(blogRoutes);
app.use(sketchBookRoutes);
app.use(videoRoutes);
app.use(aboutRoutes);


app.listen(3000, function () {
    console.log('Started server on Port 3000');
});