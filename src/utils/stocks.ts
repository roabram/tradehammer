import { StocksType } from '../types';
import { getStocksCollection } from './database';

export const saveStock = async (symbol: StocksType): Promise<void> => {
  await getStocksCollection().insertOne({ ...symbol });
};

export const readStockData = async (): Promise<StocksType[]> => {
  return await getStocksCollection().find().toArray();
};

export const deleteStockData = async (symbol: StocksType): Promise<void> => {
  await getStocksCollection().deleteOne(symbol);
};
