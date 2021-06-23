import { Collection, MongoClient } from 'mongodb';
import { StocksType } from '../types';

let client: MongoClient;

export const connectDatabase = async (url: string): Promise<void> => {
  client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
};

export const disconnectDatabase = async (): Promise<void> => {
  return client.close();
};

export const getCollection = <T>(symbol: string): Collection<T> => {
  return client.db().collection<T>(symbol);
};

export const getStocksCollection = (): Collection<StocksType> => {
  return getCollection<StocksType>('stocks');
};
