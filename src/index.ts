import express from 'express';
import initLoader from './loaders';

const app = express();

initLoader(app);
app.listen(3000, () => {
  console.log('Hello World');
});
