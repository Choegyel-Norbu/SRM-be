const db = require('../../connection/connection');

module.exports = {
  create: (params, callback) => {
    db.query(`INSERT INTO student_table(email, password, phone, name) VALUES(?, ?, ?, ?)`,
    [
      params.email,
      params.password,
      params.phone,
      params.name
    ],
    (error, results, fields) => {
      if (!error)
        return callback(error, results);
      else
        return callback(error);
    });
  },

  getUser: callback =>{
    db.query('SELECT id, name, email, phone FROM student_table',
     (err, result, fields)=> {
      if(!err)
        return callback(err, result);
      else
        return callback(err, null);
    })
  },

userAuth: (params, callback) => {
  console.log('email = ' + params.email );
  db.query(`SELECT * FROM student_table WHERE email = ?`,[params.email],
    (error, result, fields) => {
      if(!error) {
        return callback(error, result[0])
      }
      else
        return callback(error)
    });
  }
}
