import express from 'express';
// import custom routes here

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'in api root' });
})

// router.use('/customRoute', customRoute);

export default router;
