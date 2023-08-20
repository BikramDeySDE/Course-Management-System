// importing packages
const express =require("express");
const CourseModel = require("../models/course");
const course = require("../models/course");

// creating 'Router' from 'express'
const router = express.Router();

// creating routes

// get all courses
router.get("/", async (req,res)=>{
    try {
        const courses = await CourseModel.find(); // async-await --> only after the completion of this function, 'res.json(courses)' will be executed (the response will be sent)
        res.json(courses);
    } catch (error) {
        res.json(error);
    }
});

// get a single course by Id
router.get("/:courseId", async (req,res)=>{

    // fetching courseId from param (url)
    const courseId = req.params.courseId;

    try {
        const c = await CourseModel.findById(courseId);   // fetching course by id
        res.json(c);    // sending response
    } catch (error) {
        res.json(error);       // sending error
    }
});

// create a course
router.post("/", async (req,res)=>{
    
    // fetching course from body of the request
    const course = await req.body();
    try {
        const createdCourse = CourseModel.create(course);
        res.json(createdCourse);
    } catch (error) {
        res.json(error);    
    }
});

// delete a course
router.delete("/:courseId", async (req,res)=>{

    // fetching courseId from param of request
    const courseId = req.params.courseId;

    try {
        await CourseModel.remove({"_id": courseId});
        res.status(200).json({
            message: "Course Deleted Successfully !!"
        })
    } catch (error) {
        res.json(error);
    }
});

// update a course
router.put("/:courseId", async (req,res)=>{

    // fetching courseId from body and courseData from request-body
    const courseId = req.params.courseId;
    const course = req.body;

    try {
        const updatedCourse = await CourseModel.updateOne(
            {                           // the object which is to be updated
                "_id": courseId     
            },
            course                      // update by this object 
        );

        res.json(updatedCourse);
    } catch (error) {
        res.json(error);
    }
})




// exporting 'router'
module.exports = router;
