const express = require("express");
const noteController = require("../Controllers/noteController");


const router = express.Router();

router.get("/notes" ,noteController.Api.getAllNotes);

module.exports = router;

