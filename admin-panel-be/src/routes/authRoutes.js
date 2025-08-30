import express from 'express';
import authController from '../controllers/authController.js';

const authRoutes = express.Router();

authRoutes.post('/signup', authController.signup);
authRoutes.get('/login', );
