import React from 'react';
import { Banner, Card } from '../Components';
import { useSelector, useDispatch } from 'react-redux';
import allActions from './Actions';
import { Link } from 'react-router-dom';
import './HomePage.css';
export default function HomePage() {
  const dispatch = useDispatch();
  const mutualFund = useSelector((state) => state.mutualFund);
  const user = useSelector((state) => state.User);
  return (
    <div>
      <Banner text="Mutual Fund Investor" />
      {mutualFund &&
        mutualFund.map((ele, i) => (
          <Link to={`./DetailsPage:${ele.scheme_code}`} className="Link">
            <Card ele={ele} key={i} />
          </Link>
        ))}
    </div>
  );
}
