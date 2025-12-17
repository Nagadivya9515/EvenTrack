const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Enter Full name"]
    },

    email : {
        type: String,
        unique: true,
        required: [true, "Enter Email"]
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
});

// models to be used in contorllers for processing

module.exports = mongoose.model("user", UserSchema);