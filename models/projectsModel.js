const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const projectSchema = new Schema({
    name: { type: String, required: true},
    img: { type: String, required: true},
    description: { type: String, required: true},
    live: { type: String, required: true},
    github: { type: String, required: true}
})

const Project = mongoose.model("Project", projectSchema)
module.exports = Project