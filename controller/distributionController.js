const Distribution = require("../models/Distribution");
const addDistribution = async (req, res) => {
  try {
    req.body = {
      ...req.body,
      start: new Date(req.body.start),
      end: new Date(req.body.end),
    };
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

const getNextDistribution = async (req, res) => {
  try {
    const currentDate = new Date();
    const categories = await Distribution.find({
      start: { $gte: currentDate },
    }).sort({
      _id: 1,
    });
    res.send(categories);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getAllCategory = async (req, res) => {
  try {
    const categories = await Category.find({}).sort({ _id: -1 });
    res.send(categories);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getCurrentDistribution = async (req, res) => {
  try {
    const currentDate = new Date();
    const category = await Distribution.find({
      start: { $lte: currentDate },
      end: { $gte: currentDate },
    });
    res.send(category);
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
      category.start = req.body.start;
      // category.slug = req.body.slug;
      category.end = req.body.end;
      category.limit = req.body.limit;

      await category.save();
      res.send({ message: "Category Updated Successfully!" });
    }
  } catch (err) {
    res.status(404).send({ message: "Category not found!" });
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
  getNextDistribution,
  getAllCategory,
  getCurrentDistribution,
  updateDistribution,
  getProductById,
  deleteProductById,
};
