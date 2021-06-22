import dotenv from 'dotenv';
import { connectDatabase } from './utils/database';
dotenv.config();

import express from 'express';
import router from './server/routes';
import path from 'path';

const app = express();
const { PORT = 3333 } = process.env;

const start = async () => {
  if (process.env.MONGO_URL === undefined) {
    throw new Error('Missing env MONGO_URL');
  }

  await connectDatabase(process.env.MONGO_URL);
};

app.use('/api', router);

// Serve storybook production bundle
app.use('/storybook', express.static('dist/storybook'));

// Serve app production bundle
app.use(express.static('dist/app'));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

// Handle client routing, return all requests to the app
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'app/index.html'));
});

start();
