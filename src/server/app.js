import Express from 'express';
import chokidar from 'chokidar';
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
// import webpackHotServerMiddleware from 'webpack-hot-server-middleware';
// import passport from 'passport';
// import expressJwt from 'express-jwt';
// import session from 'express-session'
// import mongoose from 'mongoose';

import webpackConfig from '../../webpack/dev-commons.js';
import routes from './api';
const ENV_PATH = '.env';
const INDEX_HTML_PATH = '../../build/index.html';
const EXP_STATIC_PATH = '../../build/';
const WATCHER_DIR = './'
const compiler = webpack(webpackConfig);
const app = Express();

console.log(`~ ~ ~ attempting to connect to ${process.env.NODE_ENV} server on port ${process.env.PORT}`)

app.use(Express.static(path.join(__dirname, EXP_STATIC_PATH)));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(cors());

dotenv.load({ path: ENV_PATH });

if (process.env.NODE_ENV === 'development') {
  console.log('Attempting to compile in development...')
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    // serverSideRender: false,
  }));
  app.use(webpackHotMiddleware(compiler, {
    heartbeat: 1500
  }));
};

// api routes
app.use('/api', routes);

app.get('*', function (req, res) {
  fs.readFile( path.join(__dirname, INDEX_HTML_PATH), (err, file) => {
    if (err) {
      res.sendStatus(404);
    }
    else {
      res.send(file.toString());
    }
  })
})

// Using chokidar, this portion of the code will handle 'hot-reloading' for node
// which is similar to what happens if nodemon was used in the npm start command
const watcher = chokidar.watch(WATCHER_DIR);

watcher.on('ready', function() {
  watcher.on('all', function() {
    console.log("Clearing api/ module cache from server");
    Object.keys(require.cache).forEach(function(id) {
      if (/.[\/\\]/.test(id)) delete require.cache[id];
    });
  });
});

// if using server-side rendering, perform 'hot-reloading' for any react stuff on the client as well:
compiler.plugin('done', function() {
  console.log("Clearing app/ module cache from server");
  Object.keys(require.cache).forEach(function(id) {
    // if (/[\/\\]src[\/\\]client[\/\\]/.test(id)) delete require.cache[id];
    if (/..[\/\\]client[\/\\]/.test(id)) delete require.cache[id];
  });
});

app.listen(process.env.PORT, (err) => {
  if (err) { console.log(err); }
  console.log(`Listening to ${process.env.NODE_ENV} server on port ${process.env.PORT}`);
});
