import express from 'express';
import { localLogin, localJoin, logout } from '../controllers/authControllers';
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

authRouter.get('/logout', logout);


authRouter.post('/login', isLoggedIn, localLogin, (req, res, next) => {
  res.redirect('/');
});
authRouter.post('/join', isLoggedIn, localJoin);


export default authRouter;