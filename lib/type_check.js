module.exports = exports = function(req, res, next) {
  if(typeof req.body.firstNumber !== 'number') {
    return res.status(500).json({error: 'please input a number'});
  }
  if(typeof req.body.secondNumber !== 'number') {
    return res.status(500).json({error: 'please input a number'});
  }
  next();
}
