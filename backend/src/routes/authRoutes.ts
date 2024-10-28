import express from "express";
import { forgotPasswordRequestEmail, googleOAuth, loginUser, logoutUser, registerUser, resetPassword, verifyAccount } from "../controllers/authController";
import { protect } from "../middleware/authMiddleware";

const authRouter = express.Router() // Initializing authRouter

authRouter.post("/register-user", registerUser);

authRouter.post("/login-user", loginUser);

authRouter.post("/googleOAuth", googleOAuth)

authRouter.post("/verify-account/:emailToken", verifyAccount)

authRouter.post('/forgot-password-request', forgotPasswordRequestEmail);

authRouter.post('/reset-password/:token', resetPassword);

authRouter.get("/logout-user", protect, logoutUser)

export default authRouter;