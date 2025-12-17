const mongoose = require('mongoose');

const PlannedTaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Enter some task name"]
    },

    category : {
        type: String,
        enum: ['work', 'home', 'personal', 'project', 'other'],
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// models to be used in contorllers for processing

module.exports = mongoose.model("planned", PlannedTaskSchema);