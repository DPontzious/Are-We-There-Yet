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
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
})

module.exports = router;