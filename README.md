# A simple Webpack, Node+Express, and React+Redux boilerplate
## *This is currently a work in progress*

## Features:
* React and Node hot-reloading on the same port using Chokidar.
* Recompose higher-order functional components:
  * Higher-order components can be added to any component using `recompose`
  * Current working example to showcase this can be found in the TopNav component
* Uses `redux-promise-middleware` and `redux-thunk` middlewares for the redux store
* Uses `type-to-reducer` to make it easier to handle and read the dispatch status (PENDING, REJECTED, FULFILLED)

## Mandatory:
You will need to create a `.env` file in the root directory of this boilerplate. Inside should be two environment variables for `PORT` and `NODE_ENV`.
An example `.env` file can look like:
```
NODE_ENV="development"
PORT=3000
```

## Optional:
Install MongoDB: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#install-with-homebrew

## Commands
1. Install `nodemon` globally using `npm install -g nodemon`
2. `npm install` to install dependencies
3. `npm run build` to remove existing build files and (re)compile the webpack bundle into the `build` directory
4. `npm run start` to run the development server
  * There is currently no need to run a webpack dev server on a separate port for this boilerplate. All development and front+back end changes can be done on the same server port.
