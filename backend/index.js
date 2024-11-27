import express from "express";
import mongoose from "mongoose";
import cors from "cors"; // Allow cross-origin requests
import User from "./db/schema.js"; // Ensure this is the correct path to your schema

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/RBAC", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Route to fetch all users
app.get("/api/users/data", async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the database
    res.status(200).json(users); // Return the users as JSON
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching users" });
    console.log(error);
  }
});

// Route to add a new user
app.post("/api/users", async (req, res) => {
  try {
    const { name, role } = req.body;
    const user = new User({ name, role });
    await user.save();
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to delete a user
app.delete("/api/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the user" });
  }
});

app.put("/api/users/:id", async (req, res) => {
  const { id } = req.params;
  const { name, role } = req.body;

  if (!name || !role) {
    return res.status(400).json({ message: "Name and role are required." });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, role }, // Update name and role fields
      { new: true } // Return the updated user document
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser); // Send the updated user as the response
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Error updating user" });
  }
});

// Start the server
app.listen(8801, () => {
  console.log("Backend server is running on port 8801");
});
