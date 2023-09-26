import React from "react";
import { Spin } from "antd";


export default function Loader() {
  return (
    <div className="loader">
      <p>Loading... Please wait...</p>
      <div class="dots">
        <div></div>
        <div></div>
        <div></div>
      </div>



    </div>
  );
}
