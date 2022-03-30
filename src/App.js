import React, { useState, useEffect } from 'react';
import './style.css';
import LoginPage from './Login';
import SignUp from './SignUp';
import DetailsPage from './Details';
import HomePage from './Home';
import allActions from './Actions';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import moment from 'moment';
export default function App() {
  const dispatch = useDispatch();
  const mutualFund = useSelector((state) => state.mutualFund);
  const user = useSelector((state) => state.User);
  useEffect(() => {
    const fetchfunc = async (api) => {
      let resp = await axios.get(api);
      let data = await resp.data;
      if (data && data.data.length > 0) {
        let temp = data.data.map((ele, i) => {
          let pair = Object.values(ele);
          pair[0] = Number(moment(pair[0], 'DD-MM-YYYY').format('x'));
          pair[1] = Number(pair[1]);
          return pair;
        });

        let mfDetails = {
          meta: data.meta,
          data: temp.reverse(),
        };
        dispatch(allActions.MutualFundActions.getMFData(mfDetails));
      }
    };
    fetchfunc('https://api.mfapi.in/mf/100350');
    fetchfunc('https://api.mfapi.in/mf/100590');
    fetchfunc('https://api.mfapi.in/mf/100717');
    fetchfunc('https://api.mfapi.in/mf/100036');
    fetchfunc('https://api.mfapi.in/mf/100122');
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/DetailsPage:id" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
