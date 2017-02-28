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
// import passport from 'passport';
// import expressJwt from 'express-jwt';
// import session from 'express-session'
// import mongoose from 'mongoose';

import webpackConfig from './webpack/webpack.dev.js';
import routes from './src/api';
dotenv.load({ path: '.env' })

const compiler = webpack(webpackConfig);
const app = Express();

app.use(Express.static(path.join(__dirname, './build/')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(cors());


if (process.env.NODE_ENV === 'development') {
  console.log('attempting to compile in development...')
  // compile webpack bundle when in development
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    // serverSideRender: false,
  }));
  app.use(webpackHotMiddleware(compiler));
};

// api routes
app.use('/api', routes);

app.get('*', function (req, res) {
  fs.readFile( path.join(__dirname, './build/index.html'), (err, file) => {
    if (err) {
      res.sendStatus(404);
    }
    else {
      res.send(file.toString());
    }
  })
})

// Do "hot-reloading" of express stuff on the server
// Throw away cached modules and re-require next time
// Ensure there's no important state in there!
const watcher = chokidar.watch('./src/api');

watcher.on('ready', function() {
  watcher.on('all', function() {
    console.log("Clearing /src/api/ module cache from server");
    Object.keys(require.cache).forEach(function(id) {
      if (/[\/\\]src[\/\\]api[\/\\]/.test(id)) delete require.cache[id];
    });
  });
});

// Do "hot-reloading" of react stuff on the server
// Throw away the cached client modules and let them be re-required next time
compiler.plugin('done', function() {
  console.log("Clearing /src/app/ module cache from server");
  Object.keys(require.cache).forEach(function(id) {
    if (/[\/\\]src[\/\\]app[\/\\]/.test(id)) delete require.cache[id];
  });
});

app.listen(process.env.PORT, (err) => {
  if (err) { console.log(err); }
  console.log(`Listening to ${process.env.NODE_ENV} server on port ${process.env.PORT}`);
});
