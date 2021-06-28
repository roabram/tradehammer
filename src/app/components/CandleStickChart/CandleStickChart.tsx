import React, { useEffect, useState } from 'react';
import styles from './CandleStickChart.module.css';
import Chart from 'react-apexcharts';

type CandleStickProps = {
  stockSymbol: string;
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

function CandleStickChart({ stockSymbol }: CandleStickProps): JSX.Element {
  const [stockData, setStockData] = useState<Array<number[]>>([]);

  function loadData(symbol: string) {
    fetch(`/api/singleStock?stock=${symbol}`)
      .then((response) => response.json())
      .then((data: StockData) => {
        console.log(data);
        const transformed = data.historical.map((stock) => {
          const date = new Date(stock.date);
          console.log(date);
          const timeStamp = date.getTime();

          return [timeStamp, stock.open, stock.high, stock.low, stock.close];
        });

        const firstThirtyDays = transformed.filter(
          (_stock, index) => index < 29
        );
        setStockData(firstThirtyDays);
      });
  }

  useEffect(() => {
    loadData(stockSymbol);
  }, [stockSymbol]);

  return (
    <div className={styles.container}>
      {console.log(stockData)}
      <Chart
        options={{
          xaxis: {
            labels: {
              formatter: function (_value: string, timestamp: number) {
                return `${new Date(timestamp).getMonth() + 1}.${new Date(
                  timestamp
                ).getDate()}`;
              },
            },
          },
          chart: {
            toolbar: {
              show: true,
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
