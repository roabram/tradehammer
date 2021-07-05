import React, { useEffect, useState } from 'react';
import styles from './CandleStickChart.module.css';
import Chart from 'react-apexcharts';
import { deleteSingleStock } from '../../../utils/api';
import { StockSymbol } from '../../../types';
import DeleteIcon from '../Icons/DeleteIcon/DeleteIcon';

type CandleStickProps = {
  stockSymbol: StockSymbol;
  showChart: boolean;
  error: boolean;
  setError: (value: boolean) => void;
  withDelete: boolean;
  fetchStocks?: () => void;
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
  withDelete,
  fetchStocks,
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
    loadData(stockSymbol.symbol);
  }, [showChart]);

  return error ? (
    <p className={styles.stockErrorMessage}> Stock not found </p>
  ) : (
    <div className={styles.container}>
      <p className={styles.symbolHeader}>{stockSymbol.symbol}</p>
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
            tooltip: {
              enabled: false,
            },
            labels: {
              hideOverlappingLabels: true,
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
            animations: {
              enabled: true,
              easing: 'easeinout',
              speed: 450,
              animateGradually: {
                enabled: true,
                delay: 400,
              },
              dynamicAnimation: {
                enabled: true,
                speed: 1000,
              },
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
      {withDelete && (
        <div className={styles.minusIcon}>
          <DeleteIcon
            onClick={async () => {
              await deleteSingleStock(stockSymbol);
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              fetchStocks!();
            }}
          />
        </div>
      )}
    </div>
  );
}
export default CandleStickChart;
