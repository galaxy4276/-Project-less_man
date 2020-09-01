import express from 'express';


const app = express();

app.set('view engine', 'pug');

app.use('/', (req, res) => {
  res.send('안녕하세요.');
});

app.listen(8001, () => {
  console.log('실행중 테스트');
});
