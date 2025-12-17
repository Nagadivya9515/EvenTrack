const mongoose = require('mongoose');

const NotesSchema = mongoose.Schema({
    title: {
        type:String,
        required: [true, "Enter note title"]
    },
    content: {
        type: String,
        required: [true, "Enter notes content"]
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }

});

module.exports = mongoose.model("notes", NotesSchema);