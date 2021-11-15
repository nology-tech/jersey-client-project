import React, { useState } from "react";
import { useParams } from "react-router";
import Button from "../../components/Button/Button";
import DeviceInfo from "../../components/DeviceInfo/DeviceInfo";
import DeviceRisk from "../../components/DeviceRisk/DeviceRisk";
import devicesResponse from "../../data/devicesResponse";
import DeviceMap from "../../components/DeviceMap/DeviceMap";
import "./DevicesIndex.scss";

const DevicesIndex = (props) => {
  const { handleShowEdit } = props;
  const { device } = useParams();

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const filteredDevice = devicesResponse.find(
    (singleDevice) => singleDevice.name === device
  );

  return (
    <div className="devices-index">
      <h1>{device.name}</h1>
      <DeviceRisk
        toggleModal={toggleModal}
        securityRisk={filteredDevice.securityRisk}
      />

      <DeviceInfo
        name={filteredDevice.name}
        deviceType={filteredDevice.deviceType}
        manufacturer={filteredDevice.manufacturer}
        model={filteredDevice.model}
        opSystem={filteredDevice.opSystem}
        lastIP={filteredDevice.lastIP}
        lastSeen={filteredDevice.lastSeen}
        handleShowEdit={handleShowEdit}
      />

      <DeviceMap lastIP={filteredDevice.lastIP} />


      {modal && (
        <div className="modal">
          <div className="overlay"> </div>
          <div className="modal-content">
            <div className="modal-content__text">
              <h4 className="modal__title">
                Are you sure you want to block this device from the network?
              </h4>
              <p>This action cannot be undone.</p>
            </div>
            <Button toggleModal={toggleModal} text="Cancel" buttonRisk={true} />
            <Button
              toggleModal={toggleModal}
              text="Block Device"
              buttonRisk={false}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DevicesIndex;
