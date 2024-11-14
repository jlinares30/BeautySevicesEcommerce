import asyncHandler from 'express-async-handler';
import Review from '../models/reviewModel.js';
import Product from '../models/productModel.js';

// @desc    Create new review
// @route   POST /api/reviews
// @access  Private
const createReview = asyncHandler(async (req, res) => {
    const { productId, rating, comment } = req.body;
    const product = await Product.findById(productId);

    if (product) {
        const alreadyReviewed = await Review.findOne({
            product: productId,
            user: req.user._id,
        });

        if (alreadyReviewed) {
            res.status(400);
            throw new Error('Product already reviewed');
        }

        const review = new Review({
            name: req.user.name,
            rating: Number(rating),
            comment,
            user: req.user._id,
            product: productId,
        });

        await review.save();

        product.numReviews = await Review.countDocuments({ product: productId });

        await product.save();
        res.status(201).json({ message: 'Review added' });
    } else {
        res.status(404);
        throw new Error('Product not found');
    }
});

// @desc    Get reviews for a product
// @route   GET /api/reviews/:productId
// @access  Public
const getReviewsByProductId = asyncHandler(async (req, res) => {
    const reviews = await Review.find({ product: req.params.productId });
    res.json(reviews);
});

export { createReview, getReviewsByProductId };