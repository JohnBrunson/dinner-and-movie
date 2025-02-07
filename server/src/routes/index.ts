import { Router } from 'express';
import apiRoutes from './api/index.js';
import authRoutes from './authroutes.js'
import { authenticateToken } from '../middleware/auth.js';

const router = Router();

router.use('/api', apiRoutes);
router.use('/auth', authenticateToken, authRoutes)


export default router;
