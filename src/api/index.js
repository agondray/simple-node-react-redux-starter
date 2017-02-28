import express from 'express';
// import custom routes here

const app = express.Router();

app.get('/api', (req, res) => {
  console.log('in /api route..');
  res.json({ message: 'in api root' });
})

// app.use('/customRoute', customRoute);

export default app;
