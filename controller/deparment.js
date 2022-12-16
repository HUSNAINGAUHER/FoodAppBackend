const Distribution = require("../models/Department");
const addDistribution = async (req, res) => {
  try {
    console.log(req.body);
    const newCategory = new Distribution(req.body);
    await newCategory.save();
    res.status(200).send({
      message: "Category Added Successfully!",
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const addAllDistribution = async (req, res) => {
  try {
    const re = await Distribution.find();
    res.status(200).send(re);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const updateDistribution = async (req, res) => {
  try {
    const category = await Distribution.findById(req.body.id);
    console.log(category);
    if (category) {
      category.name = req.body.name;

      await category.save();
      res.send({ message: "Distribution Updated Successfully!" });
    }
  } catch (err) {
    res.status(404).send({ message: "Distribution not found!" });
  }
};

const getProductById = async (req, res) => {
  try {
    const category = await Distribution.findById(req.params.id);
    res.send(category);
    return category;
  } catch (err) {
    res.status(404).send({ message: "Category not found!" });
  }
};

const deleteProductById = async (req, res) => {
  try {
    const category = await Distribution.findById(req.params.id);
    await category.delete();
    res.send(category);
    return category;
  } catch (err) {
    res.status(404).send({ message: "Category not found!" });
  }
};

module.exports = {
  addDistribution,
  addAllDistribution,
  updateDistribution,
  getProductById,
  deleteProductById,
};
