const { verify } = require('jsonwebtoken');

module.exports = {
  authorize: (req, res, next) => {
    let token = req.get('authorization');
    if(token){
      token = token.slice(7);
      verify(token, "choegyel123", (err, decode) => {
        if(err){
          res.json({
            success: 0,
            message: 'Invalid token'
          })
        }else{
          next();
        }
      })
    }else{
      res.json({
        sucess: 0,
        message: "Access denied unathorized user!"
      })
    }
  }
}
