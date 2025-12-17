const Notes = require('../models/notes');

exports.getNotes = async (req, res) => {
    try {
        const notes = await Notes.find();

        return res.json({
            success: true,
            data: notes,
            count: notes.length
        }).status(200)
    }
    catch(err) {
        console.log(err)
        return res.json({
            success: false, 
            error: "Server error"
        }).status(500)
    }
}

exports.addNotes = async (req, res) => {
    try {
        const note = await Notes.create(req.body);

        return res.json({
            success: true,
            message: "Successfully added"
        }).status(201)
    }
    catch(err) {
        console.log(err)
        return res.json({
            success: false,
            error: "Server error"
        }).status(500)
    }
}

exports.deleteNotes = async (req, res) => {
    try {
        const note = await Notes.findById(req.params.id);
        if(!note) {
            return res.json({
                success : false,
                error: "ID not found"
            }).status(404)
        }

        await Notes.deleteOne(note);
    }
    catch(err) {
        console.log(err)
        return res.json({
            success: true,
            error: "Server error"
        }).status(500)
    }
}