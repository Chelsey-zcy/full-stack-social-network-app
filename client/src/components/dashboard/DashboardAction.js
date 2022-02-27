import React from "react";
import { Link } from "react-router-dom";

const DashboardAction = () => {
  return (
    <div className="dash-buttons">
      <i className="fas fa-id-badge text-primary"></i>
      <Link to="edit-profile" className="btn btn-light">
        Edit Profile
      </Link>
      <i className="fas fa-briefcase text-primary"></i>
      <Link to="edit-experience" className="btn btn-light">
        Edit Experience{" "}
      </Link>
      <i className="fas fa-briefcase text-primary"></i>
      <Link to="edit-education" className="btn btn-light">
        Edit Education{" "}
      </Link>
    </div>
  );
};

export default DashboardAction;
