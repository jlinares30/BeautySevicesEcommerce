import express from 'express';
const router = express.Router();
import { createReview, getReviewsByProductId } from '../controllers/reviewController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/').post(protect, createReview);
router.route('/:productId').get(getReviewsByProductId);

export default router;