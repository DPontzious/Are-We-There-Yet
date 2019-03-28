const router = require("express").Router();
// const booksController = require("../../controllers/booksController");
router.route("api/events")
    .get("http://api.eventful.com/json/events/search?&app_key=xrgnP4GQZxFmGt2n&keywords=books&location=Phoenix")
    .post(response.data);

// Matches with "/api/books/:id"
// router
//     .route("/:id")
//     .get(booksController.findById)
//     .put(booksController.update)
//     .delete(booksController.remove);

// module.exports = router;
