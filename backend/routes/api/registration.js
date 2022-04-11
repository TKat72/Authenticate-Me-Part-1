const express = require('express');
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Post, Registration } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


const router = express.Router();

const validateRegistration = [
    check('email')
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage('Please provide a valid email.'),
    check('name')
        .exists({ checkFalsy: true })
        .isLength({ min: 2 })
        .withMessage('Please provide a name with at least 2 characters.'),
    check('name')
        .not()
        .isEmail()
        .withMessage('Username cannot be an email.'),
    check('phone')
        .exists({ checkFalsy: true })
        .isLength({ max: 6 })
        .withMessage('Phonr can not be more then 20 charecters.'),
    handleValidationErrors
]
router.get('/', asyncHandler(async (req, res) => {

    const registrations = await Registration.getAllRegistrations();
    return res.json({ registrations })
}))

router.get('/:registrationId(\\d+)', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.registrationId, 10);
    const registration = await Registration.getRegistrationById(id);
    return res.json(registration)

}))

router.post('/new', asyncHandler(async (req, res) => {
    const { userId, postId, name, email, phone } = req.body;

    console.log("userId: ", userId, " postId: ", postId)

    const registration = await Registration.createRegistration({ userId, postId, name, email, phone })

    return res.json({ registration })


}))

// router.patch("/:registrationId(\\d+)", asyncHandler(async (req, res) => {
//     const id = parseInt(req.params.registrationId, 10);
//     const { name, email, phone } = req.body;
//     const reg = Registration.findByPk(id);
//     console.log("resulr ", reg)
//     const updated = await reg.update({ name, email, phone })

//     res.json({ updated })

// }))
router.patch('/:registrationId(\\d+)', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.registrationId, 10);
    const { name, email, phone } = req.body;

    const result = await Registration.findByPk(id);


    const updated = await result.update({ name, email, phone })

    res.json({ updated })

}))

router.delete('/:registrationId(\\d+)', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.registrationId, 10);
    const result = await Registration.findByPk(id);
    await result.destroy();

    res.json({ message: " Success!!!!!!!!" })
}))

module.exports = router;
