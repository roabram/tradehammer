import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

const { API_KEY } = process.env;

async function fetchSingleStockbyTime(stock: string): Promise<[]> {
  const url = `https://financialmodelingprep.com/api/v3/historical-price-full/${stock}?apikey=${API_KEY}`;

  const response = await fetch(url);

  const result = await response.json();
  if (Object.keys(result).length === 0) {
    throw {
      message: 'No Symbol found',
    };
  }

  return result;
}
export default fetchSingleStockbyTime;
