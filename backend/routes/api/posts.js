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
        .withMessage('Please provide Title with at least 4 chracters'),
    check('context')
        .exists({ checkFalsy: true })
        .isLength({ min: 5 })
        .withMessage('Plaase provide some information about your post'),
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
// router.get("/test", asyncHandler(async (req, res) => {
//     const test = await Post.create({
//         userId: 1,
//         title: "test$$",
//         imgUrl: "https://www.freepsdbazaar.com/wp-content/uploads/2020/06/sky-replace/sky-sunset/sunset-021-freepsdbazaar.jpg",
//         context: "Somethig somthing somthing somthing",

//     })

//     console.log(test)
//     res.json({ test })
// }))
router.post('/new', validatePost, asyncHandler(async (req, res) => {
    const { userId, title, imgUrl, context, availability } = req.body;

    const post = await Post.createPost({ userId, title, imgUrl, context, availability })
    return res.json({ post })

}))

router.delete('/:postId(\\d+)', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.postId, 10)
    const result = await Post.findByPk(id);

    await result.destroy();

    res.json({ message: "Success!!!" })
}))

router.patch('/:postId(\\d+)', validatePost, asyncHandler(async (req, res) => {
    const id = parseInt(req.params.postId, 10);
    const { userId, title, imgUrl, context, availability } = req.body;

    const result = await Post.findByPk(id);
   

    const updated = await result.update({ userId, title, imgUrl, context, availability })

    res.json({ updated })

}))




module.exports = router;
