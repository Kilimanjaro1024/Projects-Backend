const express = require("express")
const router = express.Router()

const Project = require("../models/projectsModel")

router.get("/", async (req, res) => {
    Project.find({}).then(allProjects => { 
        res.json(allProjects)
    }).catch((err) => res.json({ status: 400, err: err }))
})

module.exports = router