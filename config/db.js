const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    const connectionString = "mongodb+srv://nadin:nadin@cluster0.og7mj4c.mongodb.net/ecourse?retryWrites=true&w=majority&appName=Cluster0";
    await mongoose.connect(connectionString);
    console.log("Successfully connected to MongoDB.");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectToDb;
