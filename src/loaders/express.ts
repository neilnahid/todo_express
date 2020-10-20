import fs from 'fs';
import { Express } from 'express';
import path from 'path';
import morgan from 'morgan';
import bodyParser from 'body-parser';

export default (app: Express) => {
  console.log();
  // create a write stream (in append mode)
  const accessLogStream = fs.createWriteStream(
    path.join(__dirname, '../../access.log'),
    {
      flags: 'a',
    }
  );
  app.use(morgan('dev', { stream: accessLogStream }));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  return app;
};
