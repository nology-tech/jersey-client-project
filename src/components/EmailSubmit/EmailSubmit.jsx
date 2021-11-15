import React from "react";
import { Link } from "react-router-dom";
import "../EmailSubmit/EmailSubmit.scss";

const EmailSubmit = () => {
  return (
    <div className="successful-submit-box">
      <h3 className="successful-submit-box__header">Successfully submitted!</h3>
      <p className="successful-submit-box__text">
        You have successfully submitted your email, please check for an email
        and follow the link to complete the reset
      </p>
      <p className="successful-submit-box__text">
        Back to <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default EmailSubmit;
