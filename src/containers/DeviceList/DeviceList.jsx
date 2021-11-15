import React, { useState, useEffect } from "react";
import DeviceBar from "../../components/DeviceBar/DeviceBar";
import searchIcon from "../../assets/devices/searchIcon.png";
import filterIcon from "../../assets/devices/filterIcon.png";
import sortIcon from "../../assets/devices/sortIcon.png";

import devicesResponse from '../../data/devicesResponse'

import "./DeviceList.scss";

export const DeviceList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [deviceList, setDeviceList] = useState(devicesResponse);

  const handleInput = (event) => {
    const input = event.target.value.toLowerCase();
    setSearchTerm(input);
  };

  useEffect(() => {
    if (searchTerm.length !== 0) {
      const search = devicesResponse.filter((device) =>
        device.name.toLowerCase().includes(searchTerm)
      );
      setDeviceList(search);
    } else {
      setDeviceList(devicesResponse);
    }
  }, [searchTerm]);

  return (
    <div className="devices">
      <div className="devices__search-options">
        <form className="devices__search-options--search-bar">
          <img src={searchIcon} alt="search icon" />
          <input
            type="text"
            name="deviceSearch"
            onInput={handleInput}
            className="devices__search-options--input"
            placeholder="Search by Device name"
          />
          <label htmlFor="deviceSearch" className="search-bar__label"></label>
        </form>
        <div className="devices__search-options--filter-and-sort">
          <img src={sortIcon} alt="sort icon" className="devices__filter-sort-icon"/> <span className="devices__filter-sort-label">Sort</span>
          <img src={filterIcon} alt="filter icon" className="devices__filter-sort-icon" id="devices__filter-icon"/> <span className="devices__filter-sort-label">Filter</span>
        </div>
      </div>
      <div className="devices__list--labels">
        <p className="devices__list--labels-name">Device Name</p>
        <p className="devices__list--labels-type">Device Type</p>
        <p className="devices__list--labels-brand">Brand</p>
        <p className="devices__list--labels-model">Model</p>
        <p className="devices__list--labels-os">Operating System</p>
        <p className="devices__list--labels-ip">IP Address</p>
        <p className="devices__list--labels-last-active">Last Active</p>
        <p className="devices__list--labels-risk">Security Risk</p>
      </div>
      <div className="devices__list">
        {deviceList && deviceList.length !== 0 ? (
          deviceList.map((device, index) => (
            <DeviceBar key={device.name + index} device={device} />
          ))
        ) : (
          <p>no devices found</p>
        )}
      </div>
    </div>
  );
};
export default DeviceList;