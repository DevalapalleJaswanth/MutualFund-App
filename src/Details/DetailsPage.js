import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import './DetailsPage.css';
import { Banner, Chart } from '../Components';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
export default function DetailsPage() {
  const [data, setData] = useState(null);
  const [mfData, setMFData] = useState();
  const dispatch = useDispatch();
  const mutualFund = useSelector((state) => state.mutualFund);
  const { id } = useParams();
  let mfDetails =
    mutualFund && id
      ? mutualFund.filter((ele, i) => {
          if (ele.meta.scheme_code === id) {
            return ele;
          }
        })
      : '';

  return (
    <div className="details-container">
      <Banner text="Mutual Fund Details" />
      <div className="container">
        <div className="sub-container title">scheme name</div>
        <div>{mfDetails.length > 0 && mfDetails[0].meta.scheme_name}</div>
      </div>
      <div className="container">
        <div className="sub-container title">scheme type</div>
        <div>{mfDetails.length > 0 && mfDetails[0].meta.scheme_type}</div>
      </div>
      <div className="container">
        <div className="sub-container title">scheme code</div>
        <div>{mfDetails.length > 0 && mfDetails[0].meta.scheme_code}</div>
      </div>
      <div className="container">
        <div className="sub-container title">fund house</div>
        <div>{mfDetails.length > 0 && mfDetails[0].meta.fund_house}</div>
      </div>
      <div className="container">
        <Chart data={mfDetails.length > 0 && mfDetails[0].data} />
      </div>
    </div>
  );
}
