import express from "express";

import {
  signin,
  createUser,
  accessedauth,
  Signout,
} from "../controllers/authContoller";
import verifyAuth from "../middlewares/verifyAuth";

const router = express.Router();

// buses Routes

router.post("/signup", createUser);
router.get("/signin", signin);
router.get("/signout", Signout);
router.get("/signin", verifyAuth, accessedauth);

export default router;
