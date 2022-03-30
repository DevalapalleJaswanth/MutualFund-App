import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from './Chart';
import moment from 'moment';
export default function DetailsPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchfunc = async () => {
      let resp = await axios.get('https://api.mfapi.in/mf/100350');
      let data = await resp.data;

      console.log(data.data);
      if (data && data.data.length > 0) {
        let temp = data.data.map((ele, i) => {
          let pair = Object.values(ele);
          pair[0] = Number(moment(pair[0], 'DD-MM-YYYY').format('x'));
          pair[1] = Number(pair[1]);
          //console.log(pair, date);
          return pair;
        });
        setData([...temp].reverse());
        console.log(temp);
      }
    };

    fetchfunc();
    // console.log(data);
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
