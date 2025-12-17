const express = require('express')

const router = express.Router();

const {getNotes, addNotes, deleteNotes} = require('../controllers/notes');

router
.route("/")
.get(getNotes)
.post(addNotes)

router
.route("/:id")
.delete(deleteNotes)

module.exports = router;