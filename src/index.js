import express from 'express';
import { config } from 'dotenv';
import helmet from 'helmet';
import path from 'path';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';
import connectMaria from './lib/connectMaria';
import './controllers/passport';
import MySQLStore from 'express-mysql-session';
import methodOverride from 'method-override';
MySQLStore(session);


// Router
import authRouter from './routes/authRouter';
import globalRouter from './routes/globalRouter';
import postRouter from './routes/postRouter';

import shareFront from './lib/sharePug';


const app = express();
config();
connectMaria();

const MySQLOptions = {
  host: process.env.MARIADB_HOST,
  port: process.env.MARIADB_PORT,
  user: process.env.MARIADB_USERNAME,
  password: process.env.MARIADB_PASSWORD,
  database: process.env.MARIADB_DATABASE,
};


app.set('view engine', 'pug');
app.set('port', process.env.PORT);
app.set('views', path.resolve(__dirname, 'views'));


app.use(helmet());
app.use(morgan('dev'));
app.use(express.static(path.resolve(__dirname, 'public')));
app.use('/image', express.static(path.resolve(__dirname, 'uploads')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('eungi'));
app.use(session({
  secret: 'eungi',
  resave: false,
  saveUninitialized: true,
  store: new MySQLStore(MySQLOptions),
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(shareFront);


// app.all('/*', (req, res, next) => {
  //   if (req.user) {
    //     console.log(`사용자 ${req.user} 로그인이 되어있습니다.`);
    //   }
    //   console.log(req.passport);
    //   next();
    // });
app.use(methodOverride('_method'));
app.use('/', globalRouter);
app.use('/auth', authRouter);
app.use('/post', postRouter);


app.listen(app.get('port'), () => {
  console.log(`Funless running on http://localhost:${process.env.PORT}`);
});