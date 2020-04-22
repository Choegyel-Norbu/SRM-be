var express = require('express');
var router = express.Router();
var {createUser, userLoginAuth, get_user} = require('./usersController');
const {authorize} = require('./authorization/token_verify')
const db = require('./../../connection/connection');

router.post('/', createUser);

router.get('/', authorize, get_user);

router.post('/login', userLoginAuth)

module.exports = router
