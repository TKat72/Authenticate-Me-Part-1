const express = require('express');
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Post } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


const router = express.Router();

const validatePost = [
    check('title')
        .exists({ checkFalsy: true })
        .isLength({ min: 4 })
        .withMessage("Please provide Title with at least 4 chracters"),
    check("context")
        .exists({ checkFalsy: true })
        .withMessage("Plaase provide some information about your post"),
    handleValidationErrors
]

router.get('/', asyncHandler(async (req, res) => {
    const posts = await Post.getAllPosts();
    return res.json({ posts })

}))

router.get('/:postId(\\d+)', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.postId, 10)
    const post = await Post.getPostById(id)
    return res.json(post)

}))






module.exports = router;
