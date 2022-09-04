import React from 'react';
import {Circles,Bars} from 'react-loader-spinner';
import "./Spinner.css";

function Spinner({ message }) {
  return (
    <div className="spinner">
      <Bars
        color="#c77b41"
        height={50}
        width={200}
        className="m-5"
      />

      <p className="text-lg text-center px-2">{message}</p>
    </div>
  );
}

export default Spinner;