const express = require('express');
const router = express.Router();
const { getAuthInfo, getUser, signIn, signUp, deleteUser } = require('../../controllers/users');

router.get('/user', getAuthInfo)
router.get('/:id', getUser);

module.exports = router;