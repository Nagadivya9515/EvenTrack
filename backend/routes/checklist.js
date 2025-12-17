const express = require('express')

const router = express.Router();

const {getchecklisttask, addchecklisttask, deletechecklisttask} = require('../controllers/checklist');

router
.route("/")
.get(getchecklisttask)
.post(addchecklisttask)

router
.route("/:id")
.delete(deletechecklisttask)

module.exports = router;