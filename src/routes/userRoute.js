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
  fetchUsers,
  fetchInstructors,
} from "../controllers/authContoller";
import verifyAuth from "../middlewares/verifyAuth";
import {
  instructorMiddleware,
  studentmiddleware,
} from "../middlewares/roleauthoriser";
const router = express.Router();

// buses Routes

router.post("/signup", createUser);
router.post("/signin", signin);
router.get("/signout", Signout);
router.get("/auth_user", verifyAuth, accessedauth);

router.get("/get-all-users", fetchUsers);
router.get("/get-userprofile", verifyAuth, studentmiddleware, fetchuserprofile);
router.put("/update-userprofile", verifyAuth, updateuserprofile);
router.delete("/delete-userprofile", verifyAuth, deleteuserprofile);
// router.get("/user/:username", publicUserProfile);
//router.get("/user/photo/:userId", getUserProfilephoto); //for upload profile image

router.get("/get-all-instructors", fetchInstructors);
router.get(
  "/get-instructorprofile",
  verifyAuth,
  instructorMiddleware,
  fetchinstructorprofile
);
router.put("/update-instructorprofile", verifyAuth, updateinstructorprofile);
router.delete("/delete-instructorprofile", verifyAuth, deleteinstructorprofile);

export default router;
