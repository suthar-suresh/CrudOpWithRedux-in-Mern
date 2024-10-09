import Student from "../model/studentModel.js";

export const create = async (req, res) => {
  const stuData = req.body;
  try {
    const newStudent = new Student(stuData);
    console.log(stuData);
    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent);
    console.log(savedStudent);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAll = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getStudents = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 5;

  const skip = (page - 1) * pageSize;

  try {
    let query = {};

    if (req.params.id !== undefined) {
      query = {
        $or: [
          { name: { $regex: req.params.id, $options: "i" } },
          { email: { $regex: req.params.id, $options: "i" } },
          { gender: { $regex: req.params.id, $options: "i" } },
          { language: { $regex: req.params.id, $options: "i" } },
          { age: { $regex: req.params.id, $options: "i" } },
        ],
      };
    }

    const students = await Student.find(query).skip(skip).limit(pageSize);

    res.status(200).json(students);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getoneStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedStudent = await Student.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    // console.log("updated", updatedStudent);

    if (!updatedStudent) {
      res.status(404).json({ msg: " student not found" });
    }

    // console.log(updatedStudent);
    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteStudent = await Student.findByIdAndDelete(id);

    if (!deleteStudent) {
      res.status(404).json({ msg: " student not found" });
    }
    res.status(200).json({
      msg: "student deleted",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const searchName = async (req, res) => {
  try {
    const name = req.query.name;
    const student = await Student.find({
      name: { $regex: name, $options: "i" },
    });
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const searchAge = async (req, res) => {
  try {
    const age = req.query.age;
    const student = await Student.find({ age: { $regex: age, $options: "i" } });
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const searchEmail = async (req, res) => {
  try {
    const email = req.query.email;
    const student = await Student.find({
      email: { $regex: email, $options: "i" },
    });
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const searchGender = async (req, res) => {
  try {
    const gender = req.query.gender;
    const student = await Student.find({
      gender: { $regex: gender, $options: "i" },
    });
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const searchId = async (req, res) => {
  try {
    const id = req.query.id;
    // console.log(typeof id);
    const student = await Student.find({
      _id: { $regex: _id, $options: "i" },
    });
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const searchLanguage = async (req, res) => {
  try {
    const id = req.query.language;
    const student = await Student.find({
      language: { $regex: id, $options: "i" },
    });
    res.status(200).json(student);
  } catch (error) {}
};
