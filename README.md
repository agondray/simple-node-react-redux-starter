# A simple Webpack, Node+Express, and React+Redux boilerplate
## *This is currently a work in progress*

## Notes
* CSS hot-reloading is currently buggy. A page refresh must happen before CSS changes are observed.
* However, hot-reloading for inline styling works fine.
* This boilerplate is using the `chokidar` module to auto-reload the server files, similar to what nodemon does for back-end updates.

## What's next?
* Implement Redux `connect` to containers

## Things I'll add in the future
* Configuration to connect to MongoDb via Mongoose
* Apply PassportJS, Redis, and JWT for login and sessions
* Simple Front-end user Dashboard displaying the following:
  * Login from landing page
  * Newsfeed from select subreddits via the Reddit API
  * Small space showing the user's profile and avatar
* Topnav will be updated to look different when on the landing page vs the dashboard
* Footer can be cleaned up to display actual info and links
* Transition from npm to Yarn for locking versions

## Commands
1. `npm install` to install dependencies
2. `npm run build` to compile the webpack bundle into the `build` directory
3. `npm run start` to run the development server

## Known Bugs/Issues:
* "hot-reloading" for the back end doesn't seem to work when editing the server file.
