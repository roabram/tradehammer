import express from 'express';
import fetchSingleStockbyTime from './fmpSearch';

const router = express.Router();

router.get('/singleStock', async (_req, res, next) => {
  try {
    const { query } = _req;
    if (typeof query.stock !== 'string') {
      res.status(404).send('404 not Found');
      return;
    }
    const stockData = await fetchSingleStockbyTime(query.stock);
    res.status(200).json(stockData);
  } catch (error) {
    next(error);
  }
});

export default router;
