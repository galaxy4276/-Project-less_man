export const getForm = (req, res) => {
  res.render('layouts/postForm', {});
};


export const postForm = (req, res) => {
  const {
    body: { title, contents },
  } = req;
  console.log(req.file);
  console.table({
    title,
    contents,
  });
  res.redirect('/');
};