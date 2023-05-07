const router = require("express").Router()

router.post("/usertest" , (req,res) =>{
    res.send("hello");
    const name = req.body.name
    console.log(name)
})

module.exports = router