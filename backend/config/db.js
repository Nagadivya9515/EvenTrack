const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
        await mongoose.connect(MONGO_URI)
.then(() => console.log("Server ocnnected at 4000"))
.catch((err) => console.log(err));
    
}

module.exports = connectDB;