const mongoose = require('mongoose')

const ChecklistTaskSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Enter task name"]
    },
    completed: {
        type: Boolean,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('checklist', ChecklistTaskSchema);