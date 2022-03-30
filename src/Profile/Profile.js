import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import FaceTwoToneIcon from '@mui/icons-material/FaceTwoTone';
export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  const [user, setUser] = useState({
    name: state.user.name,
    gender: state.user.gender,
    email: state.user.email,
    DOB: state.user.DOB,
    password: state.user.password,
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
      //console.log(user, error);
      dispatch(allActions.UserActions.updateUser(user));
      navigate(-1);
    }
  };
  return (
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
  );
}
