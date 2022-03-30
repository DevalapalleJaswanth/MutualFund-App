import React, { useEffect, useState } from 'react';
import './DetailsPage.css';
import { Banner, Chart } from '../Components';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
export default function DetailsPage() {
  const [data, setData] = useState(null);
  const [mfData, setMFData] = useState();
  const navigate = useNavigate();
  const mutualFund = useSelector((state) => state.mutualFund);
  const { id } = useParams();
  let mfDetails =
    mutualFund.length && id
      ? mutualFund.filter((ele, i) => {
          if (ele.meta.scheme_code == id) {
            return ele;
          }
        })
      : '';

  //console.log(mutualFund, mfDetails, id);
  return (
    <div className="details-container">
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="back-button"
      >
        Back
      </button>
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
