import React from 'react';
import styles from './CandleStickChart.module.css';
import Chart from 'react-apexcharts';

function CandleStickChart(): JSX.Element {
  return (
    <div className={styles.container}>
      <Chart
        width="600"
        height="600"
        options={{
          plotOptions: {
            candlestick: {
              colors: {
                upward: '#3C90EB',
                downward: '#DF7D46',
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
                y: [53.66, 54.99, 51.35, 52.95],
              },
              {
                x: 1638856900000,
                y: [53.66, 54.99, 51.35, 52.95],
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
