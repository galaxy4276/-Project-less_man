import { Strategy } from 'passport-local';
import passport from 'passport';
import sequelize from '../models';

passport.use(
  new Strategy({ session: true }, (username, password, done) => {
    try {
      const user;
    } catch (err) {
      done(err);
    };
  })
);