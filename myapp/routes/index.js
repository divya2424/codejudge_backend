var express = require("express");
var router = express.Router();
var controller = require("../controllers/index");

/* GET home page. */
router.get("/", function (req, res) {
  res.send("WElcome!!!!");
});
router.post("/leads/", controller.createLead);
router.get("/leads/:id/", controller.fetchLead);
router.put("/leads/:id/", controller.updateLead);

module.exports = router;
