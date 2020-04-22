var express = require('express');
var router = express.Router();
var {createUser, userLoginAuth} = require('./usersController');
const {authorize} = require('./authorization/token_verify')
const db = require('./../../connection/connection');

router.post('/', createUser);

router.get('/', authorize, (req, res)=>{
  db.query('SELECT id, name, email, phone FROM student_table', (err, result, fields)=> {
    if(!err){
      res.json(result);
    }
  })
});

router.post('/login', userLoginAuth)

module.exports = router
