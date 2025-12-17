const express = require('express');

const router = express.Router();

const {getplannedtasks, addplannedtasks, deleteplannedtasks} = require('../controllers/planned');

router
.route("/")
.get(getplannedtasks)
.post(addplannedtasks)

router
.route("/:id")
.delete(deleteplannedtasks)

module.exports = router;