import { Router } from "express";
import { usersController } from "../controllers/usersController";

const router = Router();

router.get("/", usersController.getUsers);
router.post("/", usersController.createUser);
router.put("/:id", usersController.updateUser);

export default router;