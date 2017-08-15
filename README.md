# A simple Webpack, Node+Express, and React+Redux boilerplate
## *This is currently a work in progress*

## Features:
* React and Node hot-reloading on the same port using Chokidar.
* Recompose higher-order functional components:
  * Higher-order components can be added to any component using `recompose`
  * Current working example to showcase this can be found in the TopNav component
* Uses `redux-promise-middleware` and `redux-thunk` middlewares for the redux store
* Uses `type-to-reducer` to make it easier to handle and read the dispatch status (PENDING, REJECTED, FULFILLED)

## Commands
1. `npm install` to install dependencies
2. `npm run build` to compile the webpack bundle into the `build` directory
3. `npm run start` to run the development server
