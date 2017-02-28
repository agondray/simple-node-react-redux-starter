import Express from 'express';
import path from 'path';
import fs from 'fs';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
// import passport from 'passport';
// import expressJwt from 'express-jwt';
// import session from 'express-session'
// import mongoose from 'mongoose';

import webpackConfig from '../webpack/webpack.dev.js';
import routes from './controllers';

dotenv.load({ path: path.join(__dirname, '.env') })

var app = Express();

if (process.env.NODE_ENV === 'development') {
  console.log('attempting to compile in development...')
  // compile webpack bundle when in development
  const compiler = webpack(webpackConfig, (err, info) => {
    if (err) {
      console.log(err);
    }
  })
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }));
  app.use(webpackHotMiddleware(compiler));

  // logger module
  app.use(logger('dev'));
};

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
