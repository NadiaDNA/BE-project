const Enrollment = require("../models/enrollment.model");

module.exports = {
getAllEnrollment: async (req, res) => {
    try {
        const enrollments = await Enrollment.find();
        res.json({ message: "Get all enrollments successfully", data: enrollments });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
},
getEnrollmentById: async (req, res) => {
    try {
        const { id } = req.params;
        const enrollment = await Enrollment.findById(id);
        if (!enrollment) {
            return res.status(404).json({ message: "Enrollment not found" });
        }
        res.status(200).json({ message: "Get enrollment successfully", data: enrollment });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
},
createEnrollment: async (req, res) => {
    try {
        const { userId, courseId } = req.body;
        const newEnrollment = new Enrollment({ userId, courseId });
        await newEnrollment.save();
        res.status(201).json({ message: "Enrollment created successfully", data: newEnrollment });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
},
updateEnrollment: async (req, res) => {
    try {
        const { id } = req.params;
        const { userId, courseId } = req.body;
        const updatedEnrollment = await Enrollment.findByIdAndUpdate(id, { userId, courseId }, { new: true });
        if (!updatedEnrollment) {
            return res.status(404).json({ message: "Enrollment not found" });
        }
        res.json({ message: "Enrollment updated successfully", data: updatedEnrollment });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
},
deleteEnrollment: async (req, res) => {
    try {
        const { id } = req.params;
        const deletedEnrollment = await Enrollment.findByIdAndDelete(id);
        if (!deletedEnrollment) {
            return res.status(404).json({ message: "Enrollment not found" });
        }
        res.json({ message: "Enrollment deleted successfully", data: deletedEnrollment });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
},
clearEnrollments: async (req, res) => {
    try {
        await Enrollment.deleteMany({});
        res.json({ message: "All enrollments cleared successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}
};