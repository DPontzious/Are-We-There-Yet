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

router.post("/signin", function (req, res) {
  res.json({ token: tokenizer(req.user) });
});

router.post("/signup", function (req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(422).send({ error: "You must provide an email and password" });
  }

  db.User.findOne({ email })
    .then(dbuser => {
      // if the user exists return an error
      if (dbuser) {
        return res.status(422).send({ error: "Email already in use" });
      }
      //create new user object
      const user = new db.User({ email, password });
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
router.get("/events", function (req, res) {
  axios
    .get("http://api.eventful.com/json/events/search?&app_key=xrgnP4GQZxFmGt2n&keywords=books&location=San+Diego&date=Future",
      { params: req.query })
    .then(response => {
      // console.log("response", response.data)
      res.status(200).send(response.data)
    })
    .catch(err => {
      console.log("error", err)
      res.status(422).json(err)
    });
})

//DO #2
router.post("/api/save", function (req, res) {
  //mongoose findOneAndUpdate({$push {origin: req.body.origin, destination: req.body.destination}})
  db.User.findOneAndUpdate(
    { _id: req.body.id },
    {
      $push: {
        trip: {
          origin: req.body.origin,
          destination: req.body.destination
        }
      }
    },
    function (err, doc) {
      if (err) {
        console.log("Something wrong when updating data!");
      }
      console.log(doc);
      res.json(doc);
    });
})

//DO #3
router.get("/api/save", function (req, res) {
  db.User.findById(req.body.id).then(dbUser => {
    res.json(dbUser.trips)
  })
})
module.exports = router;