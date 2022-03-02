import React from "react";
import PropTypes from "prop-types";

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { avatar, name },
  },
}) => {
  return (
    <div>
      <div>
        <img src={avatar} alt="avatar" />
        <h1> {name}</h1>
        <p>
          {status}
          {company && <span> at {company}</span>}
        </p>
        <p>{location && <span>{location}</span>}</p>
        <div>
          {website && (
            <a href={website} target="blank" rel="noopener noreferrer">
              <i className="fal fa-browser"></i>
            </a>
          )}
          {social && social.twitter && (
            <a href={social.twitter} target="blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          )}
          {social && social.facebook && (
            <a href={social.facebook} target="blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-square"></i>
            </a>
          )}
          {social && social.youtube && (
            <a href={social.youtube} target="blank" rel="noopener noreferrer">
              <i className="fab fa-youtube-square"></i>
            </a>
          )}
          {social && social.instagram && (
            <a href={social.instagram} target="blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

ProfileTop.propTypes = {};

export default ProfileTop;
