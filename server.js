import app from './src/express.js';
import dotenv from 'dotenv';

dotenv.load({ path: '.env' });

app.listen(process.env.PORT, () => {
  console.log(`Listening to ${process.env.ENV} server on port ${process.env.PORT}`);
});

export default app;
