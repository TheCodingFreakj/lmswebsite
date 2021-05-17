import express from "express";

import {
  signin,
  createUser,
  accessedauth,
  Signout,
  fetchuserprofile,
  updateuserprofile,
  deleteuserprofile,
  fetchinstructorprofile,
  updateinstructorprofile,
  deleteinstructorprofile,
} from "../controllers/authContoller";
import verifyAuth from "../middlewares/verifyAuth";

const router = express.Router();

// buses Routes

router.post("/signup", createUser);
router.post("/signin", signin);
router.get("/signout", Signout);
router.get("/signin", verifyAuth, accessedauth);

router.get("/get-userprofile", verifyAuth, fetchuserprofile);
router.put("/update-userprofile", verifyAuth, updateuserprofile);
router.delete("/delete-userprofile", verifyAuth, deleteuserprofile);

router.get("/get-instructorprofile", verifyAuth, fetchinstructorprofile);
router.put("/update-instructorprofile", verifyAuth, updateinstructorprofile);
router.delete("/delete-instructorprofile", verifyAuth, deleteinstructorprofile);

export default router;
