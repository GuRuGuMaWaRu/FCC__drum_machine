import React from "react";
import PropTypes from "prop-types";

import "./SoundStoreItem.css";

const SoundStoreItem = ({ savedTrack: { id, track } }) => {
  return (
    <div className="sound-store-item">
      <div className="sound-store-item-track">
        {track.map(sound => (
          <span key={sound.id} className="sound-store-item-sound">
            {sound.name}
          </span>
        ))}
      </div>
      <button className="delete-store-item-button">
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};

SoundStoreItem.propTypes = {
  savedTrack: PropTypes.object.isRequired
};

export default SoundStoreItem;
