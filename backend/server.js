//  some mandatories
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/db');

const app = express();

app.use(express.json());
//  Database connection
connectDB();


// Building schemas


// Connecting schema to mongoose model
const router = require('./routes/planned');
const router2 = require('./routes/checklist');
const router3 = require('./routes/notes');
const router4 = require('./routes/user');
// Routes

app.use('/api/v1/planned', router);
app.use('/api/v1/checklist', router2);
app.use('/api/v1/notes', router3);
app.use('/api/v1/user', router4);

const {requireAuth} = require("./config/auth");
app.get("/api/me", requireAuth, (req, res) => {
    res.json({message: "You are authenticated", userId: req.userId});
})

app.listen(4000, ()=>console.log("Server started at 4000"));