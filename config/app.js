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
import mongoose from 'mongoose';
// import passport from 'passport';
// import expressJwt from 'express-jwt';
// import session from 'express-session'

import webpackConfig from '../webpack/dev-commons';
import routes from '../src/routes';

const ENV_PATH = '.env';
dotenv.load({ path: ENV_PATH });

const INDEX_HTML_PATH = '../build/index.html';
const DEV_STATIC_PATH = '../../build/';
const MONGO_URL = 'mongodb://localhost:27017/foo_bar_db';
const DB_NAME = 'foo_bar_db';
const ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 1337;
const compiler = webpack(webpackConfig);
const app = Express();

app.use(Express.static(path.join(__dirname, DEV_STATIC_PATH)));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(cors());

if (ENV === 'development') {
  console.log('~ we be developin\' ~');
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }));
  app.use(webpackHotMiddleware(compiler));
}

mongoose.connect(`${MONGO_URL}/${DB_NAME}`, (err, db) => {
  if (err) {
    console.error('Could not connect to mongodb. Please make sure you have it installed if needed.');
  } else {
    console.log(`connected to ${DB_NAME}`);
    console.log('db: ', db);
  }
});

app.use('/api', routes);

app.get('*', (req, res) => {
  const indexHTML = path.join(__dirname, INDEX_HTML_PATH);
  fs.readFile(indexHTML, (err, file) => {
    if (err) {
      res.send(err);
    } else {
      res.send(file.toString());
    }
  });
});

compiler.plugin('done', () => {
  console.log('clearing asset cache to \'hot-reload\' client.');
  Object.keys(require.cache).forEach((id) => {
    if (/..[/]src[/]assets[/]/.test(id)) delete require.cache[id];
  });
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`\nListening to ${ENV} server on port ${PORT}`);
});
