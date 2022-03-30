import React, { useState } from 'react';
import { Banner, Card, Search } from '../Components';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../Actions';
import FaceTwoToneIcon from '@mui/icons-material/FaceTwoTone';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import './HomePage.css';
export default function HomePage() {
  const [display, setDisplay] = useState('');
  const dispatch = useDispatch();
  const mutualFund = useSelector((state) => state.mutualFund);
  const user = useSelector((state) => state.User);
  const navigate = useNavigate();
  const { state } = useLocation();
  const [showProfile, setShowProfile] = useState(false);
  return (
    <div className="home-container">
      <div className="header-flex ">
        <Search mfData={mutualFund} setDisplay={setDisplay} />
        <div
          className="header-flex "
          onClick={() => {
            if (!showProfile) setShowProfile(true);
            else setShowProfile(false);
          }}
        >
          <FaceTwoToneIcon fontSize="large" />
          <span>{state && state.user.name}</span>
        </div>
      </div>
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
              key={i}
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
              key={i}
            >
              <Card ele={ele} key={i} />
            </div>
          ))}
      {showProfile && (
        <div className="profile-menu">
          <div
            onClick={() => {
              navigate('/ProfilePage', { state: { user: state.user } });
            }}
          >
            Profile
          </div>
          <div style={{ height: '4px', borderBottom: '1px solid black' }}></div>
          <div
            onClick={() => {
              navigate('/');
            }}
          >
            Logout
          </div>
        </div>
      )}
    </div>
  );
}
