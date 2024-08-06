import mongoose from "mongoose";
// var Schema = mongoose.Schema;
// ObjectId = Schema.ObjectId;

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  friend: Array,
});

export default mongoose.model("Student", studentSchema);
