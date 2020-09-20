import express from 'express';

const globalRouter = express.Router();


globalRouter.get('/', (req, res) => {
  console.log('Cookies: ', JSON.stringify(req.cookies, null, 2));
  console.log('Signed Cookies: ', JSON.stringify(req.signedCookies, null, 2));
  return res.render('layouts/main', { user: req.user });
});



globalRouter.get('/debug', (req, res) => {
  res.json({
    "req.session": req.session,
    "req.user": req.user,
    "req._passport": req._passport,
  });
});

export default globalRouter;