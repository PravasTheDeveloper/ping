const express = require("express")
const mongoose = require("mongoose")
const app = express();
const dotenv = require("dotenv");
const authRouter = require("./routes/auth")
const productRouter = require("./routes/product")
// const cont = require("./connect/cont");
dotenv.config()


const cont = mongoose.connect("mongodb+srv://PRAVAS:3fooauUykFCdRcpm@cluster0.tks4y6w.mongodb.net/?retryWrites=true&w=majority").
then(()=>{console.log("Connected")}).
catch((err) => {console.log(err)})

app.use(express.json())

app.use("/api/auth" , authRouter)
app.use("/api/product" , productRouter)

app.listen(5000 , () =>{
    console.log("Backend Server Running localhost:5000");
})