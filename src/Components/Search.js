import React, { useState } from 'react';

export default function Search({ mfData, setDisplay }) {
  const handleChange = (e) => {
    let data = mfData
      ? mfData.filter((ele) => {
          if (
            ele.meta.scheme_name
              .toLowerCase()
              .includes(e.target.value.toLowerCase())
          ) {
            return ele;
          }
        })
      : '';
    setDisplay(data);
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          handleChange(e);
        }}
        placeholder="Search"
      />
    </div>
  );
}
