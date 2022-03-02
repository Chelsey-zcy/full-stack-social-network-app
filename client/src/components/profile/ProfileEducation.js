import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ProfileEducation = ({
  education: { school, degree, field_of_study, to, from, description },
}) => {
  return (
    <div>
      <h3 className="text-dark">{school}</h3>
      <p>
        <Moment format="YYYY/MM/DD">{from}</Moment>-{""}
        {!to ? "NOW" : <Moment format="YYYY/MM/DD">{to}</Moment>}
      </p>
      <p>
        <strong> Degree:</strong> {degree}
        <p>
          <strong> Filed of Study:</strong> {field_of_study}
        </p>
      </p>
      <strong> Description:</strong> {description}
    </div>
  );
};

ProfileEducation.propTypes = {
  education: PropTypes.array.isRequired,
};

export default ProfileEducation;
