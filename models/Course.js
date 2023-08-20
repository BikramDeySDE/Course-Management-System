// importing packages
const mongoose = require('mongoose');

// creating Schema
const Course = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    videos: {
        type: Number,
        require: true
    },
    active: Boolean
});

// exporting
module.exports=mongoose.model("courses",Course);    // "courses":collection(Table) & Course:Schema(Like DAO)=> Each 'Course' will be saved in the table'courses'
