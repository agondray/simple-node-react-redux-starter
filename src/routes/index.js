import express from 'express';
// import custom routes here

const app = express.Router();

app.get('/', (req, res) => {
  console.log('in home api route');
  res.json({message: 'response from the home route'});
})

app.get('/test', (req, res) => {
  console.log('pinged /api route..');
  res.json({ message: 'in api root... yay!' });
})

// app.use('/customRoute', customRoute);

export default app;
