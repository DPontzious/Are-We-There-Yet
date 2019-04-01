const router = require("express").Router();
const db = require("../../models");
const jwt = require("jsonwebtoken");
const config = require("../../config");
const passport = require("passport");
const { requireAuth, requireSignin } = require("../auth");
const axios = require("axios");

function tokenizer(user) {
  return jwt.sign(
    {
      sub: user
    },
    config.secret
  );
}

router.get("/", function (req, res) {
  res.send("Welcome to the v1 routes!");
});

router.get("/protected", requireAuth, function (req, res) {
  res.send("You have been protected!");
});

router.post("/signin", requireSignin, function (req, res) {

  //check if user exists
  db.User.findOne({ email : req.body.email}).then(dbUser=>{
    // localStorage.setItem("name", dbUser.name);
    if(dbUser === null){
      res.status(400).send("BAD LOG IN, UNAUTHORIZED");
    }else{
      res.json({ 
        userId : dbUser._id,
        token: tokenizer(req.user),
        name: dbUser.name
      });
    }



  })


});

router.post("/signup", function (req, res) {
  const { name, email, password } = req.body;

  if (!email || !password || !name) {
    res.status(422).send({ error: "You must provide a name, email and password" });
  }

  db.User.findOne({ email })
    .then(dbuser => {
      // if the user exists return an error
      if (dbuser) {
        return res.status(422).send({ error: "Email already in use" });
      }
      //create new user object
      const user = new db.User({name, email, password });
      // save the user
      user.save().then(user => {
        // respond with the success if the user existed
        res.json({ token: tokenizer(user) });
      });
    })
    .catch(err => {
      return next(err);
    });
});
router.post("/events", function (req, res) {
  axios
    .get("http://api.eventful.com/json/events/search?&app_key=xrgnP4GQZxFmGt2n&keywords=books&location=" + req.body.location + "&date=Future",
      { params: req.query })
    .then(response => {
      res.status(200).send(response.data)
    })
    .catch(err => {
      res.status(422).json(err)
    });
})

//DO #2

router.post("/api/save", function (req, res) {
  db.User.findOneAndUpdate(
    { _id: req.body.userId },
    {
      $push: {
        trips: req.body.origin + ":" + req.body.destination
      }
    }).then(function (doc, err) {
      if (err) {
        console.log("Something wrong when updating data!");
      }
      res.json(doc);
    });
})


//DO #3
router.get("/api/save/:id", function (req, res) {
  db.User.findById(req.params.id).then(dbUser => {
    res.json(dbUser.trips)
    res.json(dbUser.users)
  })
  

})
module.exports = router;