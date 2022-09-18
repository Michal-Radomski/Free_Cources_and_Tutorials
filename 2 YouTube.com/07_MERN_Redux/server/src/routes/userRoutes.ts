import { Router } from "express";

import { signinUser, signupUser } from "../controllers/userController";

const router = Router();

router.post("/signup", signupUser);
router.post("/signin", signinUser);

export default router;
