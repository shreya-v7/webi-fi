//imports 

var express = require('express');
var app = express();
var nodemailer = require('nodemailer');
//const ejs = require('ejs')
var port = 3000;
var path = require('path');
var bodyparser = require('body-parser');
var mongoose = require("mongoose");
var User = require('./models/user');
var Newsletter = require('./models/newsletter');
var Courses = require('./models/courses');
//var Progress = require('./models/progress');
//var Enrollments = require("./models/enrollments");
const passport = require('passport');
var LocalStrategy = require('passport-local');
// var bcrypt = require('bcrypt');


mongoose.connect(
  "mongodb+srv://..",
  { useNewUrlParser: true, useUnifiedTopology: true }
);



app.use(
  require("express-session")({
    secret: "webi",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// get methods
app.get('', (req, res) => {
    res.render('index', {currentUser:req.user});
})
app.get('/index', (req, res) => {
    res.render("index", { currentUser: req.user });
})
app.get('/about', (req, res) => {
    res.render("about", { currentUser: req.user });
});
app.get('/courses', (req, res) => {
    res.render("courses", { currentUser: req.user });
});
app.get('/facts', (req, res) => {
    res.render("facts", { currentUser: req.user });
});
app.get('/login', (req, res, next) => {
    res.render("login", { currentUser: req.user });
});
app.get("/register", (req, res) => {
  res.render("register", { currentUser: req.user });
});
app.get("/news", (req, res) => {
  res.render("news", { currentUser: req.user });
});
app.get("/dashboard", (req, res) => {
  res.render("dashboard"), { currentUser: req.user };
});
app.get("/Quiz1", (req, res) => {
  res.render("Quiz1", { currentUser: req.user });
});
app.get("/Quiz2", (req, res) => {
  res.render("Quiz2", { currentUser: req.user });
});
app.get("/Quiz3", (req, res) => {
  res.render("Quiz3", { currentUser: req.user });
});
app.get("/profile-edit", (req, res) => {
  res.render("profile-edit", { currentUser: req.user });
});
app.get("/editor", (req, res) => {
  res.render("editor", { currentUser: req.user });
});
app.get("/material", (req, res) => {
  res.render("material", { currentUser: req.user });
});
app.get("/grade", (req, res) => {
  res.render("grade", { currentUser: req.user });
});
app.get("/certif", (req, res) => {
  res.render("certif", { currentUser: req.user });
});

app.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
  console.log('logged out');
});



//post methods
app.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  function (req, res) {
    console.log("logged in");
    res.redirect("/dashboard");
  }
);

app.post("/register", function (req, res) {
  var newUser = new User({
    username: req.body.username,
    email: req.body.email,
  });
  User.register(newUser, req.body.password, function (err, user) {
    if (err) {
      console.log(err);
      res.redirect("/register");
    } else {
      console.log(user);
      res.redirect("/login");
    }
  });
});

app.post("/news", function(req, res){
  var email = req.body.email;
  var newNews = new Newsletter();
  newNews.email = email;
  newNews.save(function(err, savedNews){
    if(err){
      console.log(err);
      return res.status(500).send();
    }
    else{
      // return res.status(200).send();
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "webi.fi.tech@gmail.com",
          pass: "webtech123",
        },
      });
      var mailOptions = {
        from: "webi.fi.tech@gmail.com",
        to: email,
        subject: "Welcome to Webi-Fi subscription",
        text: `Yo, you have subscribed to our newsletter service.`,
      };
      transporter.sendMail(mailOptions, function(err, info){
        if(err){
          console.log(err);
        }
        else{
          console.log("Email sent: " + info.response);
        }
      });
      res.redirect("/");
    }
  })
  console.log('here');
});

//listen om port 3000
app.listen(port, () => console.info(`Listening on ${port}`));
