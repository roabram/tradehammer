import { StocksType, UserType } from '../types';

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

export async function deleteSingleStock(symbol: string): Promise<StocksType> {
  const response = await fetch('/api/stocks', {
    method: 'DELETE',
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

export async function postLoginUser(
  user: Partial<UserType>
): Promise<UserType> {
  const response = await fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    const errorMessage = await response.text();
    throw errorMessage;
  }
  const result: UserType = await response.json();
  return result;
}
