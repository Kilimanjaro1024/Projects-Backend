require("dotenv").config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const logger = require("morgan")
const cors = require("cors")
const corsOptions = require("./configs/cors.js")



app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(express.json())
app.use(logger("dev"))

app.get("/", (req,res) => {
    res.json({
        status: 200,
        message: "My Projects"
    })
})

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})