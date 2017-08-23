import express from 'express';

import { TestUsers } from '../models';

const router = express.Router();

router.get('/', (req, res) => {
  console.log('in home api route');
  res.json({ message: 'response from the home route' });
});

router.get('/test', (req, res) => {
  console.log('pinged /api route..');
  res.json({ message: 'in api root... yay!' });
});

router.post('/create-user', (req, res) => {
  TestUsers.createTestUser(req.body);
  res.json({message: 'created new user...'});
});

export default router;
