import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from './Chart';
export default function DetailsPage() {
  const [data, setData] = useState();
  useEffect(async () => {
    let response = await axios.get(
      'https://demo-live-data.highcharts.com/aapl-c.json'
    );
    let plotData = await response.data;

    setData([...plotData]);
    console.log(data);
  }, []);
  return (
    <div>
      <div>
        <div>scheme name</div>
        <div>
          ICICI Prudential Large & Mid Cap Fund - Institutional Option - I -
          Growth
        </div>
      </div>
      <div>
        <div>scheme type</div>
        <div>Open Ended Schemes</div>
      </div>
      <div>
        <div>scheme code</div>
        <div>100350</div>
      </div>
      <div>
        <div>fund house</div>
        <div>ICICI Prudential Mutual Fund</div>
      </div>
      {console.log(data)}
      <Chart data={data} />
    </div>
  );
}
