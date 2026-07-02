const express = require("express");
const router = express.Router();
const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

// get
// router.get("/", getPeople);
// // post
// router.post("/", createPerson);
// router.post("/api/people/postman", createPersonPostman);
// // put
// router.put("/:id", updatePerson);
// // delete
// router.delete("/:id", deletePerson);

// Alternative way to define routes

router.route("/").get(getPeople).post(createPerson);
router.route("/api/people/postman").post(createPersonPostman);
router.route("/:id").put(updatePerson).delete(deletePerson);

module.exports = router;
