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
      <Link to="add-experience" className="btn btn-light">
        Add Experience{" "}
      </Link>
      <i className="fas fa-briefcase text-primary"></i>
      <Link to="add-education" className="btn btn-light">
        Add Education{" "}
      </Link>
    </div>
  );
};

export default DashboardAction;
