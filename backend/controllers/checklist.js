const checkList = require('../models/checklist');


exports.getchecklisttask = async (req, res) => {

    try {
        const checktasks = await checkList.find();

        return res.json({
            success: true,
            data: checktasks,
            count: checktasks.length
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

exports.addchecklisttask = async (req, res) => {
    try {
        const task = await checkList.create(req.body);
        return res.json({
            success: true,
            data: task
        }).status(201)
    }
    catch(err) {
        return res.json({
            success: false,
            error: "Server error"
        }).status(500)
    }
}

exports.deletechecklisttask = async (req, res) => {
    try {
        const task = await checkList.findById(req.params.id);
        if(!task) {
            return res.json({
            success: false,
            error: "ID not found"
        }).status(404)
        }

        await checkList.deleteOne(task);

        return res.json({
            success: true,
            message: "Successfully deleted"
        }).status(200)
    }
    catch(err) {
        console.log(err);
        return res.json({
            success: false,
            error: "Server error"
        }).status(500)
    }
}