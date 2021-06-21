import React from 'react';
import styles from './CandleStickChart.module.css';
import Chart from 'react-apexcharts';

type CandleStickProps = {
  stockData: Array<number[]>;
};

function CandleStickChart({ stockData }: CandleStickProps): JSX.Element {
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
