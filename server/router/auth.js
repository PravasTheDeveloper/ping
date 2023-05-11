const router = require("express").Router();
const User = require("../models/User")
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")

router.post("/register", async (req, res) => {

    const { username, email, upassword, cpassword } = req.body;

    if (!username || !email || !upassword || !cpassword) {
        res.status(422).json({ error: "Please Fill All The Feild" })
    } else {
        try {
            const UserExist = await User.findOne({ email })

            if (UserExist) {
                res.status(423).json({ error: "This Email Is Already Taken" });
            } else {
                if (upassword === cpassword) {
                    const password = CryptoJS.AES.encrypt(upassword, process.env.PASS_SEC);
                    const registerUser = new User({
                        username, email, password
                    });

                    const registered = await registerUser.save()

                    if (registered) {
                        res.status(400).json({ messege: "Detail Saved" })
                    } else {
                        res.status(401).json({ error: "Your Password Is Not Same ! " })
                    }
                }
            }
        } catch (err) {
            res.status(400).json({ error: `${err}` })
        }
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ error: "Plese Fill All The Fill" });
    } else {
        try {
            const mainUser = await User.findOne({ email: email });

            if (mainUser) {
                const hashedPassword = CryptoJS.AES.decrypt(
                    mainUser.password,
                    process.env.PASS_SEC
                );
                console.log(process.env.PASS_SEC)

                const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
                console.log(originalPassword)

                if (originalPassword === password) {
                    const accessToken = jwt.sign(
                        {
                            id: mainUser._id,
                            isAdmin: mainUser.isAdmin,
                        },
                        process.env.JWT_SEC,
                        { expiresIn: "3d" }
                    );

                    const { password, ...others } = mainUser._doc;
                    res.status(200).json({ ...others, accessToken });
                    res.send("LOGIN SUCCESSFULL");

                } else {
                    res.status(402).json({ error: "Password not same" });
                }
            } else {
                res.status(401).json({ error: "Invalid Login !" });
            }


        } catch (error) {
            res.status(400).json({ error: "Something Went Wrong" });
            console.log(error);
        }
    }
});

module.exports = router