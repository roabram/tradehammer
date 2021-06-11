import express from 'express';
import fetchSingleStockbyTime from './fmpSearch';

const router = express.Router();

router.get('/singleStock', async (_req, res, next) => {
  try {
    const { query } = _req;
    if (typeof query.stock !== 'string' || typeof query.time !== 'string') {
      res.status(404).send('Hello World');
      return;
    }
    const repos = await fetchSingleStockbyTime(query.stock, query.time);
    res.status(200).json(repos);
  } catch (error) {
    next(error);
  }
});

export default router;
