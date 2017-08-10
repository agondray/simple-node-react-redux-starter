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

import webpackConfig from '../webpack/dev-commons.js';
import routes from '../src/routes';
const ENV_PATH = '.env';
const INDEX_HTML_PATH = '../build/index.html';
const DEV_STATIC_PATH = '../../build/';
const WATCHER_DIR = './'
const compiler = webpack(webpackConfig);
const app = Express();

dotenv.load({ path: ENV_PATH });

// #here
// if development...
app.use(Express.static(path.join(__dirname, DEV_STATIC_PATH)));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(cors());

if (process.env.NODE_ENV === 'development') {
  console.log('Webpack - attempting to compile in development...')
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }));
  app.use(webpackHotMiddleware(compiler));
};

app.use('/api', routes);

app.get('*', function (req, res) {
  const indexHTML = path.join(__dirname, INDEX_HTML_PATH);
  fs.readFile( indexHTML, (err, file) => {
    if (err) {
      throw err;
      res.sendStatus(500);
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
    console.log("chokidar - Cleared backend module cache");
    Object.keys(require.cache).forEach(function(id) {
      if (/..[\/\\]src[\/\\]routes[\/\\]/.test(id)) delete require.cache[id];
    });
  });
});

// if using server-side rendering, perform 'hot-reloading' for any react stuff on the client as well:
compiler.plugin('done', function() {
  console.log("chokidar - 'hot-reloaded' React components.");
  Object.keys(require.cache).forEach(function(id) {
    if (/..[\/\\]src[\/\\]assets[\/\\]/.test(id)) delete require.cache[id];
  });
});

app.listen(process.env.PORT, (err) => {
  if (err) { console.log(err); }
  console.log(`\nListening to ${process.env.NODE_ENV} server on port ${process.env.PORT}`);
});
