import React, { useEffect } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
export default function Chart({ data }) {
  let options = {
    rangeSelector: {
      enabled: true,
      selected: 6,
    },

    title: {
      text: 'Mutual Fund ',
    },

    series: [
      {
        name: 'NAV',
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
