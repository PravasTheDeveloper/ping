const mongoose = require('mongoose');
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  address: {
    type:String
  },
  phoneNumber: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  tokens: [{
    token:{
        type:String,
        required : true
    }
}]
});

userSchema.pre("save" , async function(next) {
  if(this.isModified('password')){
      this.password = await bcrypt.hash(this.password , 12);
  }
  next();
});

userSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id:this._id} , process.env.JWT_SEC);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    }catch(err)
    {
        console.log(err);
    }
}

const User = mongoose.model('User', userSchema);

module.exports = User;
