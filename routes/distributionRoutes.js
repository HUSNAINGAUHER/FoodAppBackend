const express = require("express");
const router = express.Router();
const {
  addAllDistribution,
  addDistribution,
  getCurrentDistribution,
  getNextDistribution,
  updateDistribution,
  getProductById,
  deleteProductById,
} = require("../controller/distributionController");

//add a category
router.post("/add", addDistribution);

//add all category
router.get("/all", addAllDistribution);

//get only showing category
router.get("/nextDistribution", getNextDistribution);

//get all category
router.get("/currentDistribution", getCurrentDistribution);

//get all category
router.put("/updateDistribution", updateDistribution);

router.get("/productById/:id", getProductById);

router.delete("/:id", deleteProductById);

module.exports = router;
