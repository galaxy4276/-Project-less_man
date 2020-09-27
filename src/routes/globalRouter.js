import express from 'express';
import { homeLoading } from '../controllers/globalControllers';


const globalRouter = express.Router();


globalRouter.get('/', homeLoading);



globalRouter.get('/debug', (req, res) => {
  res.json({
    "req.session": req.session,
    "req.user": req.user,
    "req._passport": req._passport,
  });
});

export default globalRouter;