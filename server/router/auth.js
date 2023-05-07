const router = require("express").Router();
const User = require("../models/User")
const CryptoJS = require("crypto-js")

router.post("/register", async (req, res) => {

    const {username , email , upassword , cpassword} = req.body;

    if(!username || !email || !upassword || !cpassword){
        res.status(422).json({error : "Please Fill All The Feild"})
    }else{
        try{
            const UserExist = await User.findOne({email})

            if(UserExist){
                res.status(423).json({error:"This Email Is Already Taken"});
            }else{
                if(upassword === cpassword){
                    const password = CryptoJS.AES.encrypt(upassword, process.env.PASS_SEC);
                    const registerUser = new User({
                        username , email , password
                    });

                    const registered = await registerUser.save()

                    if(registered){
                        res.status(400).json({messege : "Detail Saved"})
                    }else{
                        res.status(401).json({error : "Your Password Is Not Same ! "})
                    }
                }
            }
        }catch(err){
            res.status(400).json({error: `${err}`})
        }
    }




    // const newUser = new User({
    //     username: req.body.username,
    //     email: req.body.email,
    //     password: req.body.password,
    // });

    // try {
    //     const savedUser = await newUser.save();
    //     res.status(201).json(savedUser);
    // } catch (err) {
    //     res.status(500).json(err);
    // }
})

module.exports = router