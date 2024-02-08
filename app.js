const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const bookRouter = require("./controller/bookrouter")

const app = express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://nandhini:nandhini8606@cluster0.rv1crhn.mongodb.net/bookDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
})


app.use("/api/book",bookRouter)
app.listen(3004,()=>{
    console.log("server is running")

})