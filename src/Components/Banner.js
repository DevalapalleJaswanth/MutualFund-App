import React from 'react';
import './Banner.css';
export default function Banner({ text }) {
  return (
    <div className="banner-container">
      <h2>{text}</h2>
    </div>
  );
}
