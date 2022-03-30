import React, { useEffect } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
export default function Chart({ data }) {
  //   const highChartsRender = () => {
  //     Highcharts.Chart('container', {

  //       rangeSelector: {
  //         selected: 1,
  //       },

  //       title: {
  //         text: 'AAPL Stock Price',
  //       },

  //       series: [
  //         {
  //           name: 'AAPL',
  //           data: data,
  //           tooltip: {
  //             valueDecimals: 2,
  //           },
  //         },
  //       ],
  //     });
  //   };
  //   let options={

  //     rangeSelector: {
  //       selected: 1,
  //     },

  //     title: {
  //       text: 'AAPL Stock Price',
  //     },

  //     series: [
  //       {
  //         name: 'AAPL',
  //         data: data,
  //         tooltip: {
  //           valueDecimals: 2,
  //         },
  //       },
  //     ],
  //   }
  //   const StockChart = ({ options, highcharts }) => <HighchartsReact
  //   highcharts={highcharts}
  //   constructorType={'stockChart'}
  //   options={options}
  // />
  //   useEffect(() => {
  //     highChartsRender();
  //   }, []);
  let options = {
    rangeSelector: {
      selected: 1,
    },

    title: {
      text: 'AAPL Stock Price',
    },

    series: [
      {
        name: 'AAPL',
        data: data && data,
        tooltip: {
          valueDecimals: 2,
        },
      },
    ],
  };
  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={'stockChart'}
      options={options}
    />
  );
}
