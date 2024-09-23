import express from 'express';
import { getTest, getDateOnly, postDateOnly, getFromEnv } from '../controllers/apiController';

const router = express.Router();

router.get('/test', getTest);
router.get('/dateonly', getDateOnly);
router.post('/dateonly', postDateOnly);
router.get('/from-env', getFromEnv);

export default router;