const router = require("express").Router();
const Product = require("../models/ProductSchema");


router.post("/addProduct", async (req, res) => {
    const newProduct = new Product(req.body);

    try {
        const savedProduct = await newProduct.save();
        if (savedProduct) {
            res.send("Saved");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ALL PRODUCTS
router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
        let products;

        if (qNew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(10);
        } else if (qCategory) {
            products = await Product.find({
                categories: {
                    $in: [qCategory],
                },
            });
        } else {
            products = await Product.find();
        }

        res.status(200).json(products);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET PRODUCT
router.get("/:id", async (req, res) => {
    try {
        const productCode = req.params.id;
        const product = await Product.findOne({productCode : productCode});
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router