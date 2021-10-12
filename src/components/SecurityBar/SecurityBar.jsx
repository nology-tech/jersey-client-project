import React from "react";
import "./SecurityBar.scss";
import ActiveDevices from "./ActiveDevices/ActiveDevices";
import Alerts from "./Alerts/Alerts";
import HighRisk from "./HighRisk/HighRisk";

const SecurityBar = () => {
  return (
    <div className="security-bar">
      <div>
        <h1 className="security-bar__heading">Dashboard</h1>
      </div>
      <div>
        <ActiveDevices />
        <Alerts />
        <HighRisk />
      </div>
    </div>
  );
};

export default SecurityBar;
