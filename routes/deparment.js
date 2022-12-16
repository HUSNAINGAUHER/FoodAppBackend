const express = require("express");
const router = express.Router();
const {
  addAllDistribution,
  addDistribution,
  updateDistribution,
  getProductById,
  deleteProductById,
} = require("../controller/deparment");

//add a category
router.post("/add", addDistribution);

//add all category
router.get("/all", addAllDistribution);

//get all category
router.put("/updateDistribution", updateDistribution);

router.get("/productById/:id", getProductById);

router.delete("/:id", deleteProductById);

module.exports = router;
