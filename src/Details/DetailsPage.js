import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import './DetailsPage.css';
import { Banner, Chart } from '../Components';
export default function DetailsPage() {
  const [data, setData] = useState(null);
  const [mfData, setMFData] = useState();
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
        setMFData({ ...data.meta });
      }
    };

    fetchfunc();
    // console.log(data);
  }, []);

  return (
    <div className="details-container">
      <Banner text="Mutual Fund Details" />
      <div className="container">
        <div className="sub-container title">scheme name</div>
        <div>{mfData && mfData.scheme_name}</div>
      </div>
      <div className="container">
        <div className="sub-container title">scheme type</div>
        <div>{mfData && mfData.scheme_type}</div>
      </div>
      <div className="container">
        <div className="sub-container title">scheme code</div>
        <div>{mfData && mfData.scheme_code}</div>
      </div>
      <div className="container">
        <div className="sub-container title">fund house</div>
        <div>{mfData && mfData.fund_house}</div>
      </div>
      <div className="container">
        <Chart data={data} />
      </div>
    </div>
  );
}
