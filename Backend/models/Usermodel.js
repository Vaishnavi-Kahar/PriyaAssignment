const mongoose = require("mongoose"); 
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const User = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  contactNumber: {
    type: String,
    required: true
    },
   password: {
        type: String,
        required: [true, "Enter your Password"],
        minlength: [8, "Name should have more than 8 characters"],
        select: false

    },
  // You can add more fields as needed
  createdAt: {
    type: Date,
    default: Date.now
  }
});
User.pre("save", async function (next) { // function ka use kr rhe h bcz there is no this keyword ib arrow function

    if (!this.isModified("password")) { // if the client change the password then only use bycrpt otherwise dont do any
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);

})
// jwt token


User.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};

//  compare password correct or not
User.methods.comparePassword = async function (enteredPassword) { 
    return await bcrypt.compare(enteredPassword, this.password);
}


// reset password
User.methods.getResestPasswordToken= function () { 
//  generate token
    const resetToken = crypto.randomBytes(20).toString("hex");

    // hashing and adding to userschema
    this.resetpasswordToken = crypto.createHash("sha256")
        .update(resetToken).digest("hex");
    this.resetpasswordExpire = Date.now() + 15 * 60 * 1000;
    return resetToken;
}

module.exports = mongoose.model("User", User);