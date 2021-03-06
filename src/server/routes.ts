import express from 'express';
import { deleteStockData, readStockData, saveStock } from '../utils/stocks';
import fetchSingleStockbyTime from './fmpSearch';

const router = express.Router();

router.get('/singleStock', async (req, res, next) => {
  try {
    const { query } = req;
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

router.post('/stocks', async (req, res) => {
  await saveStock(req.body);
  res.send('Stock saved in DB');
});

router.get('/stocks', async (_req, res) => {
  const stockdata = await readStockData();
  res.json(stockdata);
});

router.delete('/stocks', async (req, res) => {
  await deleteStockData(req.body);
  res.send('Stock deleted from db');
});

export default router;
