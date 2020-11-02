const shareFront = (req, res, next) => {
  res.locals.user = req.user;
  return next();
};

export default shareFront;