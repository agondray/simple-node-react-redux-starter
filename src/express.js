import Express from 'express';
import path from 'path';
import fs from 'fs';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import routes from './controllers';
// import passport from 'passport';
// import expressJwt from 'express-jwt';
// import session from 'express-session'
// import mongoose from 'mongoose';

// dotenv.load({ path: '../.env' })

const app = Express();

if (process.env.ENV === 'development') { app.use(logger('dev')); };

app.use(Express.static(path.join(__dirname, '../build/')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(cors());

app.get('*', function (req, res) {
  // res.setHeader({'Content-Type': 'text/html'});
  fs.readFile(path.resolve(__dirname, '../build/index.html'), (err, file) => {
    if (err) {
      res.sendStatus(404);
    }
    else {
      res.send(file.toString());
    }
  })
})

app.use('/api', routes);

export default app;
