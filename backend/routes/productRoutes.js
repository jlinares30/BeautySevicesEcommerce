import express from 'express'
const router = express.Router()
import { protect } from '../middleware/authMiddleware.js';
import {
	getProducts,
	getProductById,
	deleteProduct,
	createProduct,
	updateProduct,
	getTopProducts,
} from '../controllers/productController.js'
import { admin } from '../middleware/authMiddleware.js'

router.route('/').get(getProducts).post(protect, admin, createProduct)
router.get('/top', getTopProducts)

router
	.route('/:id')
	.get(getProductById)
	.delete(protect, admin, deleteProduct)
	.put(protect, admin, updateProduct)

export default router
