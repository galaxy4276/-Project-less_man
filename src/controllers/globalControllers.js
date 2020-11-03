import sequelize from '../models';
const { Post, User } = sequelize;


export const homeLoading = async (req, res) => {
  const articleList = await Post.findAll({
    include: [{
      model: User,
      attributes: ['userid']
    }],
  });

  console.log('Cookies: ', JSON.stringify(req.cookies, null, 2));
  console.log('Signed Cookies: ', JSON.stringify(req.signedCookies, null, 2));
  return res.render('layouts/main', { user: req.user, articleList });
}