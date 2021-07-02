import { StocksType } from '../types';

export async function postSearchResult(symbol: string): Promise<StocksType> {
  console.log(JSON.stringify({ symbol }));
  const response = await fetch('/api/stocks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ symbol }),
  });
  if (!response.ok) {
    const errorMessage = await response.text();
    throw errorMessage;
  }
  const result: StocksType = await response.json();
  return result;
}

export async function deleteSingleStock(symbol: string): Promise<StocksType> {
  const response = await fetch('/api/stocks', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ symbol }),
  });
  if (!response.ok) {
    const errorMessage = await response.text();
    throw errorMessage;
  }
  const result: StocksType = await response.json();
  return result;
}
