const express = require("express");
const router = express.Router();

//Student Model
const Student = require('../models/student');

//@route    POST api/items
//@desc     Create an Item
//@access   Private
router.post("/", async (req,res) => {
    try {
        // console.log(JSON.parse(req.body))
        Student.insertMany(req.body.exportedData);
        return res.json({success: true});
      } catch (e) {
        console.log(e);
        return res.status(400).json({ msg: e });
      }
});
module.exports = router;