import express from "express";
const router = express.Router();
import { addSchool, listSchools } from "../controllers/schoolController.js";
console.log(addSchool);
// Add School
router.post("/addSchool", addSchool);
// List Schools
router.get("/listSchools", listSchools);

export default router;
