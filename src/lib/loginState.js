export const isLoggedIn = (req, res, next) => {
  if (req.user) {
    res.redirect('/');
  } else {
    next();
  }
};