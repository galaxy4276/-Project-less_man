import sequelize from '../models';
import bcrypt from 'bcrypt';


const { User } = sequelize; 

export const localLogin = (req, res) => {
  console.log('test');
};


export const localJoin = async (req, res, next) => {
  const { id, passwd, verifypw } = req.body;

  try {
    const user = await User.findByPk(id);

    const pw = await bcrypt.hash(passwd, 10);
    console.log(`created pw: ${pw}`);

    if (user) {
      console.log('유저가 이미 존재합니다.');
      next();
    }

    if ( !user && (passwd === verifypw)) {
      await User.create({
        id,
        name: 'unknown1',
        password: await (await bcrypt.hash(passwd, 10)).slice(0, 30),
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
