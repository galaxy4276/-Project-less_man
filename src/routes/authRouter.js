import express from 'express';


const authRouter = express.Router();


authRouter.get('/login', (req, res) => {
  return res.render('layouts/login', {});
});

authRouter.get('/join', (req, res) => {
  return res.render('layouts/join', {});
});


export default authRouter;