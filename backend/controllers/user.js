const users = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");



exports.registerUser = async (req , res) => {
    try {
        const {name, email, password} = req.body;

        let user = await users.findOne({email});

        if(user) 
            return res.status(400).json({message: "User already exists"})

        const hashedPassword = await bcrypt.hash(password, 10);

        user = await users.create({name, email, password: hashedPassword});

        res.status(201).json({message: 'Registered successfully'});
    }
    catch(err) {
        console.log(err);
        res.status(500).json({message: "Server error"});
    }
};


exports.loginUser = async (req , res) => {
    try {
        const { email, password } = req.body;

        let user = await users.findOne({email});

        if (!user)
            return res.status(400).json({message: "User not found"});

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) 
            return res.status(400).json({message: "Invalid credentials"});

        const token = jwt.sign(
            {userId: user._id},
            process.env.JWT_SECRET,
            {expiresIn: process.env.TOKEN_EXPIRE}
        );

        res.status(200).json({message: "Login successful", token});
    }
    catch(err) {
        console.log(err);
        res.status(500).json({message: "Server error"});
    }
}