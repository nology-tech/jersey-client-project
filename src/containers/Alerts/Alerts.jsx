import React, { useState } from "react";
import { isDeviceChecked } from "./AlertFunctions.js";
import { 
  handleChangeLoggedOn,
  handleChangeOutage,
  handleChangeHighRisk,
  handleChangeDevice,
 } from "./AlertFunctions.js";
 
 import AlertFilter from "../../components/AlertFilter/AlertFilter.jsx";
import AlertItem from "../../components/AlertItem/AlertItem";
import ChatButton from "../../components/ChatButton/ChatButton";
import AlertPageButton from "../../components/AlertPageButton/AlertPageButton";
import { alerts } from "../../data/alerts.js";

import SearchIcon from "../../assets/global/search-icon.svg";
import SortIcon from "../../assets/global/sort-icon.svg";
import FilterIcon from "../../assets/devices/filterIcon.png";
import WhiteDropDown from "../../assets/global/white-dropdown.svg";
import AlertsArrow from "../../assets/alerts/alerts-arrow.svg";

import "./Alerts.scss";

const Alerts = () => {
  const [pages, setPages] = useState(0);
  const [splitAlertsArrays] = useState([]);

  const handleDecrement = () => {
    if (pages > 0) {
      setPages(pages - 1);
    }
  };

  const handleIncrement = () => {
    if (pages >= 0 && pages < alerts.length / 9 - 1) {
      setPages(pages + 1);
    }
  };

  const alertsArray = [...alerts];

  /// Karans Messing around
  const [filtersArray, setFiltersArray] = useState([])
  const handleFilterCheckbox = (event) => {
    let tempArr = [...filtersArray];
    if(tempArr.includes(event.target.id)) {
      tempArr.splice(tempArr.indexOf(event.target.id), 1);
    } else {
      tempArr.push(event.target.id);
    }
    setFiltersArray(tempArr);
  }
  // importance Level
  const [isLowImportance, setLowImportanceLevel] = useState(false);
  const [isHighImportance, setHighImportanceLevel] = useState(false);
  const handleIsLowImportance = () => {
    setLowImportanceLevel(!isLowImportance);
  }
  const handleIsHighImportance = () => {
    setHighImportanceLevel(!isHighImportance);
  }

  const [isLessHour, setIsLessHour] = useState(false);
  const [isLessThreeHour, setIsLessThreeHour] = useState(false);
  const handleIsLessHour = () => {
    setIsLessHour(!isLessHour);
  }
  const handleIsLessThreeHour = () => {
    setIsLessThreeHour(!isLessThreeHour);
  }

const shouldReturn = (network) => {
  // currentFilters.forEach(filter => {
  //   if(network.alertType.includes(filter)) {
  //     console.log("check");
  //     return true;
  //   }
  // })
  for (let i = 0; i < filtersArray.length; i++) {
    if (network.alertType.includes(filtersArray[i])) {
      return true;
    }
  }
  return false;
};

const networksArrayFilteredBySubHour = alertsArray
  .filter((network) => {
    return shouldReturn(network) && (isLowImportance ? network.importanceID == 1 : true) && (isHighImportance ? network.importanceID == 2 : true) && (isLessHour ? network.createdTime <= 60 : true) && (isLessThreeHour ? network.createdTime > 60 : true)
  })
  .sort((a, b) => a.createdTime - b.createdTime);

  console.log(networksArrayFilteredBySubHour);

  while (alertsArray.length > 0) {
    splitAlertsArrays.push(alertsArray.splice(0, 9));
  }

  const alertsItemJSX = splitAlertsArrays[pages].map((alert, index) => {
    return (
      <AlertItem
        key={alert + index}
        name={alert.alertType}
        summary={alert.summary}
        created={alert.created}
        importanceLevel={alert.importanceLevel}
        index={index}
      />
    );
  });

  const buttonNumbers = [];

  const generateButtonIndex = () => {
    for (let i = 0; i < alerts.length / 9; i++) {
      buttonNumbers.push(i);
    }
  };

  generateButtonIndex();

  const buttonJSX = buttonNumbers.map((buttonNumber, index) => {
    return (
      <AlertPageButton
        key={buttonNumber + index}
        index={index + 1}
        setPages={setPages}
        pages={pages}
      />
    );
  });

  return (
    <>
      <section className="alerts">
      <AlertFilter
          handleFilterCheckbox={handleFilterCheckbox}
          handleIsLowImportance={handleIsLowImportance}
          handleIsHighImportance={handleIsHighImportance}
          handleIsLessHour={handleIsLessHour}
          handleIsLessThreeHour={handleIsLessThreeHour}
        />
        <div className="alerts__search">
          <div className="alerts__search-box">
            <img className="alerts__icons" src={SearchIcon} alt="search-icon" />
            <input
              type="text"
              placeholder="Search Alerts"
              className="search-input"
            />
          </div>
          <div className="alerts__search-filter-sort">
            <div className="alerts-sort">
              <img className="alerts__icons" src={SortIcon} alt="sort-icon" />
              <p className="alerts__text-paragraph">Sort</p>
            </div>
            <div className="alerts-filter">
              <img
                className="alerts__icons"
                src={FilterIcon}
                alt="filter-icon"
              />
              <p className="alerts__text-paragraph">Filter</p>
            </div>
          </div>
        </div>
        <div className="alerts-table">
          <div className="alerts-table__header">
            <div className="alerts-table__header-alert">
              <h5 className="alert-header">Alert Type</h5>
              <img src={WhiteDropDown} alt="dropdown" />
            </div>
            <div className="alerts-table__header-summary">
              <h5 className="alert-header">Sumary</h5>
            </div>
            <div className="alerts-table__header-created">
              <h5 className="alert-header">Created</h5>
              <img src={WhiteDropDown} alt="dropdown" />
            </div>
            <div className="alerts-table__header-importance">
              <h5 className="alert-header">Importance Level</h5>
              <img src={WhiteDropDown} alt="dropdown" />
            </div>
          </div>
          <div className="alerts-table__alerts">{alertsItemJSX}</div>
          <div className="alerts-table__pages">
            {alerts.length > 9 && (
              <div className="alerts-table__pages-buttons">
                <button
                  className="alerts-table__pages-buttons-button"
                  onClick={handleDecrement}
                >
                  <img
                    src={AlertsArrow}
                    alt="left-arrow"
                    className="alerts__left-arrow"
                  />
                </button>
                {buttonJSX}
                <button
                  className="alerts-table__pages-buttons-button"
                  onClick={handleIncrement}
                >
                  <img
                    src={AlertsArrow}
                    alt="right-arrow"
                    className="alerts__right-arrow"
                  />
                </button>
              </div>
            )}
          </div>
        </div>
        <ChatButton />
      </section>
    </>
  );
};

export default Alerts;