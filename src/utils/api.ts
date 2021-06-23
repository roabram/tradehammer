import { StocksType } from '../types';

export async function postSearchResult(symbol: string): Promise<StocksType> {
  const response = await fetch('/api/stocks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ symbol: symbol }),
  });
  if (!response.ok) {
    const errorMessage = await response.text();
    throw errorMessage;
  }
  const result: StocksType = await response.json();
  return result;
}
