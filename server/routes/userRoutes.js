import express from "express";
import { SignUp, SingIn } from "../controllers/userController.js";

const router = express.Router();

router.post("/signup", SignUp);
router.post("/signin", SingIn);

export default router;
