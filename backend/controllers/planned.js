// controlelr has get , post, delete, updat emethods for server

const plannedList = require('../models/planned');

exports.getplannedtasks = async (req, res) => {
    try {
        const plannedTasks = await plannedList.find();

        return res.json({
            success: true,
            data: plannedTasks,
            count: plannedTasks.length
        })
        .status(200)
    }
    catch(err) {
        return res.json({
            success: false,
            error: "server error"
        })
        .status(500);
    }
}


exports.addplannedtasks = async (req, res) => {
    try {
        // const {name, category} = req.body;

        const task = await plannedList.create(req.body);

        return res.json({
            success: true,
            data: task
        })
        .status(201)
    }
    catch(err) {
        return res.json({
            success: false,
            error: "server error"
        })
        .status(500);
    }
}


exports.deleteplannedtasks = async (req, res) => {
    try {
        const task = await plannedList.findById(req.params.id);

        if(!task) {
            return res.json({
                success: false,
                message: "Not found task with Id"
            })
            .status(404)
        }

        await plannedList.deleteOne(task);

        return res.json({
            success: true,
            data: "Task deleted"
        })
    }
    catch(err) {
        return res.json({
            success: false,
            error: "server error"
        })
        .status(500);
    }
}