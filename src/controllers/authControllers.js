import sequelize from '../models';
import bcrypt from 'bcrypt';
import passport from 'passport';


const { User } = sequelize; 

export const localLogin = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/auth/login',
  failureFlash: false
});


export const localJoin = async (req, res, next) => {
  const { id, passwd, verifypw } = req.body;

  try {
    const user = await User.findOne({ where: { userid: id }});

    if (user) {
      console.log('유저가 이미 존재합니다.');
      next();
    }

    if ( !user && (passwd === verifypw)) {
      await User.create({
        userid: id,
        name: 'unknown2',
        password: await bcrypt.hash(passwd, 10),
      });
      console.log('계정이 생성 되었습니다.');
    } else {
      console.log('계정 생성 실패');
      res.redirect('/join');
    }
  } catch (e) {
    console.error(e);
    console.log('에러가 발생하였습니다.');
    res.redirect('/');
  }

  res.redirect('/');
};

export const logout = (req, res) => {
  req.logout();
  res.redirect('/');
};
