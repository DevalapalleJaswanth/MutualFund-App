import React, { useState } from 'react';
import { Banner, Card, Search } from '../Components';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../Actions';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
export default function HomePage() {
  const [display, setDisplay] = useState('');
  const dispatch = useDispatch();
  const mutualFund = useSelector((state) => state.mutualFund);
  const user = useSelector((state) => state.User);
  const navigate = useNavigate();
  return (
    <div>
      <Search mfData={mutualFund} setDisplay={setDisplay} />
      <br />
      <Banner text="Mutual Fund Investor" />
      {display === ''
        ? mutualFund &&
          mutualFund.map((ele, i) => (
            <div
              className="Link"
              onClick={() => {
                navigate(`./DetailsPage/${ele.meta.scheme_code}`);
              }}
            >
              <Card ele={ele} key={i} />
            </div>
          ))
        : display.length > 0 &&
          display.map((ele, i) => (
            <div
              className="Link"
              onClick={() => {
                navigate(`./DetailsPage/${ele.meta.scheme_code}`);
              }}
            >
              <Card ele={ele} key={i} />
            </div>
          ))}
    </div>
  );
}
