import express from 'express';
// import custom routes here

const app = express.Router();

app.get('/test', (req, res) => {
  console.log('pinged /api route..');
  res.json({ message: 'in api root' });
})

// app.use('/customRoute', customRoute);

export default app;
