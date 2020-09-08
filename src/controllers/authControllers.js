import sequelize from '../models';


const { User } = sequelize; 

export const localLogin = (req, res) => {
  console.log('test');
};


export const localJoin = (req, res) => {
  const { id, passwd, verifypw } = req.body;

  console.log(sequelize);
  console.log(`id: ${id}\npasswd: ${passwd}\nverifypwd: ${verifypw}`);

  res.redirect('/');
};
