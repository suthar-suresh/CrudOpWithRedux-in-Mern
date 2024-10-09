import express from "express";
import {
  create,
  getStudents,
  getoneStudent,
  updateStudent,
  deleteStudent,
  searchName,
  searchAge,
  searchGender,
  searchId,
  searchLanguage,
  searchEmail,
  getAll,
} from "../controller/studnetController.js";

const router = express.Router();

router.post("/create", create);
router.post("/getStudents/", getStudents);
router.get("/getAll/", getAll);
router.post("/getStudents/:id", getStudents);
router.get("/getoneStudent/:id", getoneStudent);
router.put("/updateStudent/:id", updateStudent);
router.delete("/deleteStudent/:id", deleteStudent);
router.get("/searchName/", searchName);
router.get("/searchAge/", searchAge);
router.get("/searchGender/", searchGender);
router.get("/searchID/:id", searchId);
router.get("/searchLanguage/", searchLanguage);
router.get("/searchEmail/", searchEmail);

export default router;
