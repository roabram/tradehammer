import React from 'react';
import styles from './CandleStickChart.module.css';
import Chart from 'react-apexcharts';

function CandleStickChart(): JSX.Element {
  return (
    <div className={styles.container}>
      <Chart
        options={{
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
            data: [
              {
                x: 1538856900000,
                y: [63.66, 70, 51.35, 68],
              },
              {
                x: 1638856900000,
                y: [88.66, 44.99, 51.35, 99.95],
              },
              {
                x: 1738856900000,
                y: [53.66, 54.99, 51.35, 52.95],
              },
              {
                x: 1838856900000,
                y: [53.66, 54.99, 51.35, 52.95],
              },
            ],
          },
        ]}
        type="candlestick"
      />
    </div>
  );
}
export default CandleStickChart;
