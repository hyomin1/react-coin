import { errorMonitor } from "events";

const BASE_URL = `https://api.coinpaprika.com/v1`;

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

export function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
}
export async function fetchCoinHistory(coinId: string) {
  //const endDate = Math.floor(Date.now() / 1000);
  //const startDate = endDate - 60 * 60 * 24 * 7;
  const res = await fetch(
    `https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}`
  );
  if (!res.ok) {
    throw new Error("No Data!");
  }
  return res.json();
}
