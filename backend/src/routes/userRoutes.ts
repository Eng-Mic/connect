import express from "express";
import { deleteUser, getUser, getUsers, privilege, suspendUser, unSuspendUser, updateUser, updateUserPermissions } from "../controllers/userController";
import { admin, protect } from "../middleware/authMiddleware";

const userRouter = express.Router(); // Initializing userRouter

userRouter.get("/get-user", getUsers);

userRouter.get("/get-user/:id", protect, getUser);

userRouter.put("/update-user/:id", protect, updateUser);

userRouter.put("/set-privilege/:id", protect, privilege);

userRouter.put("/suspend-user/:id", protect, admin, suspendUser);

userRouter.put("/unSuspend-user/:id", protect, admin, unSuspendUser);

userRouter.put('/update-user-permissions', protect, admin, updateUserPermissions);

userRouter.delete("/delete-user/:id", protect, admin, deleteUser)

export default userRouter;