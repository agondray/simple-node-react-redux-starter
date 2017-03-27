# A simple Webpack, Node+Express, and React+Redux boilerplate
## *This is currently a work in progress*

## Things To Note
* CSS hot-reloading currently doesn't work. However, hot-reloading for inline styling works fine.

## What's next?
* Implement Redux `connect` to containers

## Things I'll add in the future
* Configuration to connect to MongoDb via Mongoose
* Apply PassportJS, Redis, and JWT for login and sessions
* Simple Front-end user Dashboard displaying the following:
  * Ligin from landing page
  * Newsfeed from select subreddits via the Reddit API
  * Small space showing the user's profile and avatar
* Topnav will be updated to look different when on the landing page vs the dashboard
* Footer can be cleaned up to display actual info and links

## Commands
1. `npm install` to install dependencies
2. `npm run build` to build the webpack bundle
3. `npm run start` to run the development server
4. Alternatively, you could run `npm run serve` to remove the build folder, build the webpack bundle, and start the server.
