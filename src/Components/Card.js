import React from 'react';
import './Card.css';
export default function Card({ ele }) {
  return (
    <div className="card-container">
      <div>
        <div>
          <div>{ele && ele.meta.scheme_name}</div>
        </div>
        <br />
        <div>
          <div className=" card-title">scheme type</div>
          <div>{ele && ele.meta.scheme_type}</div>
        </div>
      </div>
      <div className="growth-container">
        <div>{` ${
          ele && ele.data[0][1] !== 0
            ? (ele.data[ele.data.length - 1][1] / ele.data[0][1]).toFixed(2)
            : ele.data[ele.data.length - 1][1].toFixed(2)
        }X `}</div>
        <div>growth</div>
      </div>
    </div>
  );
}
