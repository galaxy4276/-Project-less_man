import express from 'express';
import { config } from 'dotenv';
import helmet from 'helmet';
import path from 'path';
import morgan from 'morgan';
import cookieParser, { JSONCookies } from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';
import connectMaria from './lib/connectMaria';
import './controllers/passport';


// Router
import authRouter from './routes/authRouter';
import globalRouter from './routes/globalRouter';


const app = express();
config();
connectMaria();


app.set('view engine', 'pug');
app.set('port', process.env.PORT);
app.set('views', path.resolve(__dirname, 'views'));


app.use(helmet());
app.use(morgan('dev'));
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'eungi',
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());


app.all('/*', (req, res, next) => {
  if (req.user) {
    console.log(`사용자 ${req.user} 로그인이 되어있습니다.`);
  }
  console.log(req.passport);
  next();
});
app.use('/', globalRouter);
app.use('/auth', authRouter);


app.listen(app.get('port'), () => {
  console.log('실행중 테스트');
});