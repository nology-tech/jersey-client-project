import React from "react";
import "./NetworkID.scss";
import whiteDropdown from "./../../../assets/global/white-dropdown.svg";

const NetworkID = () => {
  return (
    <div className="network-ID">
      <div className="network-ID__dropdown">
        <button className="network-ID__dropdown-button">
          1a3cc5d0-49d9v2{" "}
          <img
            className="network-ID__dropdown-arrow"
            src={whiteDropdown}
            alt="White Dropdown Arrow"
          ></img>
        </button>

        <div className="network-ID__dropdown-content">
          <p className="network-ID__dropdown-content--heading">
            Please choose a network from the list below:
          </p>
          <p className="network-ID__dropdown-content--link">1a3cc5d0-49d9v2</p>
          <p className="network-ID__dropdown-content--link">4950cc70-8b1d</p>
          <p className="network-ID__dropdown-content--link">d64dc599-6550</p>
        </div>
      </div>
    </div>
  );
};

export default NetworkID;
