import express from 'express';
import { localLogin, localJoin } from '../controllers/authControllers';
import { isLoggedIn } from '../lib/loginState';


const authRouter = express.Router();

authRouter.get('/login', isLoggedIn, (req, res) => {
  return res.render('layouts/login', {});
});


authRouter.get('/join', isLoggedIn, (req, res) => {
  return res.render('layouts/join', {});
});


authRouter.get('/test', (req, res) => {
  res.send('test');
});

authRouter.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});


authRouter.post('/login', isLoggedIn, localLogin);
authRouter.post('/join', isLoggedIn, localJoin);


export default authRouter;