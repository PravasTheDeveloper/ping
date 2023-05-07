const express = require("express")
const  mongoose = require("mongoose")
const app = express()
const dotenv = require("dotenv")
const userRoute = require("./router/user")
const authRoute = require("./router/auth")
dotenv.config()

mongoose.connect(process.env.DB).
then(()=>{console.log("Connected")}).
catch((err) => {console.log(err)})

app.use(express.json());
app.use("/api/user" , userRoute);
app.use("/api/user" , authRoute);

app.listen(5000, () => {
    console.log("Backend server is running!");
});
 