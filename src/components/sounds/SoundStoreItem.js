import React from "react";
import PropTypes from "prop-types";

import "./SoundStoreItem.css";

const SoundStoreItem = ({ savedTrack: { id, track }, handleDeleteTrack }) => {
  return (
    <div className="sound-store-item">
      <div className="sound-store-item-track">
        {track.map(sound => (
          <span key={sound.id} className="sound-store-item-sound">
            {sound.name}
          </span>
        ))}
      </div>
      <button
        className="delete-store-item-button"
        onClick={() => handleDeleteTrack(id)}
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};

SoundStoreItem.propTypes = {
  savedTrack: PropTypes.object.isRequired,
  handleDeleteTrack: PropTypes.func.isRequired
};

export default SoundStoreItem;
