const User = require('../models/user.model');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');

module.exports = {
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            })
        }

        const user = await User.findOne({
            email
        })

        if (!user) {
            return res.status(400).json({
                message: "User not found, please register first"
            })
        }

        const isPasswordValid = bcrypt.compareSync(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({
                message: "Invalid password"
            })
        }

        const token = jwt.sign({
            id: user._id,
            name: user.name,
            email: user.email,
        }, "sadlkfnojhboiwnvccpvisnvpirwenhipn", {
            expiresIn: "1h"
        })

        res.status(200).json({
            message: "Login successful",
            token
        })
      } catch (e) {
        res.status(400).json({
            message: e.message
        })
      }
    },

    register: async (req, res) => {
        try {
            const { name, email, password } = req.body;
            if (!name || !password || !email) {
                return res.status(400).json({ message: "All fields are required" });
            }

            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(password, salt);

            const user = new User({ name, email, password: hashedPassword });
            await user.save();
            res.status(201).json({ message: "User registered successfully" });
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error", error: error.message });
        }
    }
}