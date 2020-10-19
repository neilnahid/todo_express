import bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import initLoader from './loaders';

const app = express();
// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, '../access.log'),
  {
    flags: 'a',
  }
);
app.use(morgan('dev', { stream: accessLogStream }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
initLoader(app);
app.listen(3000, () => {
  console.log('Hello World');
});
