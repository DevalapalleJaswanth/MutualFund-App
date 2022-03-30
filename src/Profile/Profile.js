import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import allActions from '../Actions';
import FaceTwoToneIcon from '@mui/icons-material/FaceTwoTone';
export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);
  const User = useSelector((state) => state.User);
  console.log(User);
  const [user, setUser] = useState({
    name: state.user ? state.user.name : '',
    gender: state.user ? state.user.gender : '',
    email: state.user ? state.user.email : '',
    DOB: state.user ? state.user.DOB : '',
    password: state.user ? state.user.password : '',
    id: state.user ? state.user.id : '',
  });
  const [error, setError] = useState();
  const handleChange = (e) => {
    if (e.target.value === '') {
      setError({ ...error, [e.target.name]: `${e.target.name} is required` });
    } else {
      setError({ ...error, [e.target.name]: '' });
    }
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    var errKeys = Object.keys(user).filter((key) => {
      if (user[key] === '') {
        return key;
      }
    });
    if (errKeys.length >= 1) {
      alert('Please fill all fields');
    } else {
      console.log(user, error);
      let data = User
        ? User.map((ele) => {
            if (ele.id === state.user.id) {
              return user;
            } else {
              return ele;
            }
          })
        : '';
      console.log(data);
      dispatch(allActions.UserActions.updateUser(data));
      navigate(-1);
    }
  };
  return (
    <>
      <button
        className="back-button "
        onClick={() => {
          navigate(-1);
        }}
        style={{ marginBottom: '10px' }}
      >
        Back
      </button>

      <div className="form-text">
        <div className="form-container ">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <h2>Profile</h2>
            <div className="flex-column">
              <label>Name:</label>
              <input
                type="text"
                id="Name"
                name="name"
                onChange={(e) => {
                  handleChange(e);
                }}
                value={user.name}
              />
              <div className="error">{error && error.name}</div>
            </div>
            <div className="flex-column">
              <label>Email:</label>
              <input
                type="text"
                id="Email"
                name="email"
                onChange={(e) => {
                  handleChange(e);
                }}
                value={user.email}
              />
              <div className="error">{error && error.email}</div>
            </div>
            <div className="flex-column">
              <label>Date of Birth:</label>
              <input
                type="text"
                id="DOB"
                name="DOB"
                onChange={(e) => {
                  handleChange(e);
                }}
                value={user.DOB}
              />
              <div className="error">{error && error.DOB}</div>
            </div>
            <div className="display-flex">
              Gender:
              <input
                type="radio"
                id="Gender"
                name="gender"
                onChange={(e) => {
                  handleChange(e);
                }}
                value="male"
                className="radio-btn"
                checked={user.gender === 'male' ? true : false}
              />
              <label>Male</label>
              <input
                type="radio"
                id="Gender"
                name="gender"
                onChange={(e) => {
                  handleChange(e);
                }}
                value="female"
                className="radio-btn"
                checked={user.gender === 'female' ? true : false}
              />
              <label>female</label>
              <div className="error">{error && error.gender}</div>
            </div>
            <div className="flex-column">
              <label>Password:</label>
              <input
                type="password"
                id="Password"
                name="password"
                onChange={(e) => {
                  handleChange(e);
                }}
                value={user.password}
              />
              <div className="error">{error && error.password}</div>
            </div>
            <div>
              <button className="signup-btn">Update</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
