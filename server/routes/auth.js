const router = require("express").Router()
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const User = require("../models/UserSchema")

// router.get("/register", async (req, res) => {
//     console.log("hello")
// })

router.post("/register" , async(req , res) => {

    const { firstName, lastName, email, password, cpassword, address, phoneNumber } = req.body;

    if (!firstName || !lastName || !email || !password || !cpassword || !address || !phoneNumber) {
        return res.status(422).json({error:"PLESE FILL ALL THE FEILD"});
    }else{
    try{
        
        const UserExist = await User.findOne({ email:email });
        if(UserExist){
            return res.status(422).json({error:"This Email Already Exist"});
        }else{
            if(password === cpassword){
                const registerEmployee = new User({
                    firstName, lastName, email, password, cpassword, address, phoneNumber
                });

                const registered = await registerEmployee.save();

                if(registered){
                    res.status(200).json({messege:"Detail Saved"})
                }
                }else{
                res.status(401).json({error:"Your Password Is Not Same !"});
            }
        }
    }catch(err){
        res.status(400).json({error:`${err}`})
        console.log(err);
    }
    
}
});


router.post("/login" , async(req , res) => {
    const {email , password} = req.body;
    if(!email || !password){
        res.status(400).json({error:"Plese Fill All The Fill"});
    }else{
        try{
            const findEmail = await User.findOne({email:email});

            if(findEmail){
                const isMatch = await bcrypt.compare(password , findEmail.password);
                
                const token = await findEmail.generateAuthToken();

                res.cookie("jwtoken" , token , {
                    expires : new Date(Date.now() + 25892000000)
                })

                    if(isMatch)
                    {
                        res.send("LOGIN SUCCESSFULL");
                    }else
                    {
                        res.status(400).json({error:"Invalid Login !"});
                    }
            }else{
                res.status(400).json({error:"Invalid Login !"});
            }

            
        }catch(error)
        {
            res.status(400).json({error:"Something Went Wrong"});
            console.log(error);
        }
    }    
});

module.exports = router