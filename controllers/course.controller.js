const Course = require("../models/course.model");

module.exports = {
getAllCourse: async (req, res) => {
    try {
        const courses = await Course.find();
        res.json({message: "Successfully get all courses",data: courses})
       
    } catch (error) {
        res.status(500).json({message: "Internal server error", error: error.message});
    }
},

getCourseById: async(req, res) => {
    try {
        const { id } = req.params;
        const course = await Course.findById(id);
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }
        res.status(200).json({ message: "Get course successfully", data: course });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
},

createCourse: (req, res) => {
    try {
        const { title, description, duration } = req.body;
        const newCourse = new Course({
            title,
            description,
            duration
        });
        newCourse.save()

        res.status(201).json({ message: 'Course created successfully' });

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
},
updateCourse: async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, duration } = req.body;
        const updatedCourse = await Course.findByIdAndUpdate(id, { title, description, duration }, { new: true });
        if (!updatedCourse) {
            return res.status(404).json({ message: "Course not found" });
        }

        res.json({ message: "Course updated successfully", data: updatedCourse });
    
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }

},
deleteCourse: async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCourse = await Course.findByIdAndDelete(id);
        if (!deletedCourse) {
            return res.status(404).json({ message: "Course not found" });
        }
        res.json({ message: "Course deleted successfully", data: deletedCourse });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}
}
