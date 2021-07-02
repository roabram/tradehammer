import React, { useEffect, useState } from 'react';
import styles from './CandleStickChart.module.css';
import Chart from 'react-apexcharts';

type CandleStickProps = {
  stockSymbol: string;
  showChart: boolean;
  error: boolean;
  setError: (value: boolean) => void;
};

export type Historical = {
  open: number;
  close: number;
  high: number;
  low: number;
  date: string;
};

type StockData = {
  historical: Historical[];
};

function CandleStickChart({
  stockSymbol,
  showChart,
  error,
  setError,
}: CandleStickProps): JSX.Element {
  const [stockData, setStockData] = useState<Array<number[]>>([]);

  function loadData(symbol: string) {
    setError(false);
    fetch(`/api/singleStock?stock=${symbol}`)
      .then((response) => response.json())
      .then((data: StockData) => {
        const transformed = data.historical.map((stock) => {
          const date = new Date(stock.date);
          const timeStamp = date.getTime();

          return [timeStamp, stock.open, stock.high, stock.low, stock.close];
        });

        const firstThirtyDays = transformed.filter(
          (_stock, index) => index < 29
        );
        setStockData(firstThirtyDays);
      })
      .catch((error) => {
        setError(true);
        console.error(error);
      });
  }

  useEffect(() => {
    loadData(stockSymbol);
  }, [showChart]);

  return error ? (
    <p> Stock not found </p>
  ) : (
    <div className={styles.container}>
      <p className={styles.symbolHeader}>{stockSymbol}</p>
      <Chart
        options={{
          yaxis: {
            labels: {
              style: {
                colors: ['#FFFFFF', '#FFFFFF', '#FFFFFF'],
                fontFamily: 'Roboto',
                fontSize: '0.6em',
              },
            },
          },
          xaxis: {
            labels: {
              show: false,
              formatter: function (_value: string, timestamp: number) {
                return `${new Date(timestamp).getMonth() + 1}.${new Date(
                  timestamp
                ).getDate()}`;
              },
            },
          },
          chart: {
            toolbar: {
              show: false,
            },
          },
          grid: {
            show: false,
          },
          legend: {
            horizontalAlign: 'left',
          },
          plotOptions: {
            candlestick: {
              wick: {
                useFillColor: true,
              },
              colors: {
                upward: '#43b415',
                downward: '#d21311',
              },
            },
          },
        }}
        series={[
          {
            name: 'series-1',
            data: stockData,
          },
        ]}
        type="candlestick"
      />
    </div>
  );
}
export default CandleStickChart;
