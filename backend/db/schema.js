import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

// Use a default export
export default User;
