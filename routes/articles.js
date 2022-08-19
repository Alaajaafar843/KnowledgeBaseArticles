const router = require("express").Router();

const article = require("../Models/Article");

router.get("/", async (req, res) => {
  try {
    const products = await article.find().sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const product = await article.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  const newArticle = new article(req.body);

  try {
    const savedArticle = await newArticle.save();
    res.status(200).json(savedArticle);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const updateArticle = await article.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateArticle);
  } catch (error) {
    res.status(500).status(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    await article.findByIdAndDelete(req.params.id);
    res.status(200).json("Article deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
