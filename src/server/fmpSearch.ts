import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

const { API_KEY } = process.env;

type ErrorResult = {
  message: string;
};

async function fetchSingleStockbyTime(
  stock: string,
  time: string
): Promise<[]> {
  const url = `https://financialmodelingprep.com/api/v3/historical-chart/${time}/${stock}?apikey=${API_KEY}`;

  const response = await fetch(url);
  if (!response.ok) {
    const errorResult: ErrorResult = await response.json();
    console.log(errorResult);
    throw {
      message: errorResult.message,
    };
  }
  const result = await response.json();
  return result;
}
export default fetchSingleStockbyTime;
