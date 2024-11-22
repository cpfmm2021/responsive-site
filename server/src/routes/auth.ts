import express from 'express';
import { signup, login, getMe, verifyEmail, forgotPassword, resetPassword } from '../controllers/authController';
import { auth } from '../middleware/auth';

const router = express.Router();

// 인증 라우트
router.post('/signup', signup);
router.post('/login', login);
router.get('/verify-email/:token', verifyEmail);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);
router.get('/me', auth, getMe);

export default router;
