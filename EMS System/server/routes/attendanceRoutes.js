import {Router} from "express";
import { protect } from "../middleware/auth.js";
import { clockInOut, getAttendance } from "../controllers/attendanceController.js";

const attendanceRuter = Router();

attendanceRuter.post('/',protect,clockInOut)
attendanceRuter.get('/',protect,getAttendance)

export default attendanceRuter;