import { StocksType, StockSymbol } from '../types';
import { getStocksCollection } from './database';

export const saveStock = async (symbol: StocksType): Promise<void> => {
  await getStocksCollection().insertOne({ ...symbol });
};

export const readStockData = async (): Promise<StockSymbol[]> => {
  return await getStocksCollection().find().toArray();
};

export const deleteStockData = async (symbol: StocksType): Promise<void> => {
  console.log('backend', symbol);
  const response = await getStocksCollection().deleteOne({
    symbol: symbol.symbol,
  });
  console.log(response);
};
