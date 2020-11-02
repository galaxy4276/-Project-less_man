import sequelize from '../models';

const { Post } = sequelize;


export const getForm = (req, res) => {
  res.render('layouts/postForm', {});
};


export const postForm = async (req, res) => {
  const {
    body: { title, contents },
  } = req;

  const image = (req.file) ? req.file.filename : null;
  if (title) {
    await Post.create({
      title,
      content: contents,
      image,
      UserId: req.user,
    });
  } else {
    res.redirect('/');
  }

  res.redirect('/');
};