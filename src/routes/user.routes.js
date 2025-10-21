import { Router } from 'express';
import { registerUser } from '../controllers/user.controllers.js';

const router = Router();

// POST /api/v1/users/register
router.route("/register").post(registerUser);

export default router;
