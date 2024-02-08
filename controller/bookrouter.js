const express = require("express")
const bookmodel = require("../models/bookmodel")

const router = express.Router()

router.post("/book_entry",async(req,res)=>{
    let data = req.body
    let book = new bookmodel(data)
    let result = await book.save()
    res.json({
        status:"success"
    })
})

router.get("/viewall",async(req,res)=>{
    let data = await bookmodel.find()
    res.json(data)
})

module.exports = router

