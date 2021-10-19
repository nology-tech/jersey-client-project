import React from 'react';
import "./NetworkFilter.scss";

const NetworkFilter = () => {




  return (
    <>
      <section className="network-filter" >
        <div className="network-filter-container">
          <h4 className="network-filter__header-text">Filter</h4>
          <div className="network-filter__filter--alert" >
            <p className="network-filter__filter-text">Alert Type</p>
            <form action="" className="network-filter__filter--alert-form" />
              <input type="checkbox" name="New Device" value="New Device" />
              <label for="vehicle1" className="network-filter__checkbox-text">New Device</label><br/>
              <input type="checkbox" />
              <label for="vehicle2" className="network-filter__checkbox-text">Outage</label><br/>
              <input type="checkbox" />
              <label for="vehicle3" className="network-filter__checkbox-text">High Device Risk</label><br/>
              <input type="checkbox" />
              <label for="vehicle3" className="network-filter__checkbox-text">Device Logon</label>
            <form/>
          </div>
          <div className="network-filter__filter--created">
            <p className="network-filter__filter-text">Created</p>
            <form action="" className="network-filter__created--filters" />
              <input type="checkbox" />
              <label for="vehicle1" className="network-filter__checkbox-text">Less than 1hr ago</label><br/>
              <input type="checkbox"  />
              <label for="vehicle2" className="network-filter__checkbox-text">1 - 3hrs ago</label>
            <form/>
          </div>
          <div className="network-filter__filter--importance">
            <p className="network-filter__filter-text">Importance Level</p>
            <form action="" className="network-filter__importance--filters" />
              <input type="checkbox" />
              <label for="vehicle1" className="network-filter__checkbox-text">Low</label><br/>
              <input type="checkbox"  />
              <label for="vehicle2" className="network-filter__checkbox-text">High</label>
            <form/>
          </div>
          <div className="network-filter__apply">
            <p>Apply</p>
          </div>
        </div>

      </section>


    </>
  )
}

export default NetworkFilter;
