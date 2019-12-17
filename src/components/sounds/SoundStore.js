import React, { useContext } from "react";

import SoundStoreItem from "./SoundStoreItem";
import SoundContext from "../../context/sound/soundContext";
import "./SoundStore.css";

const SoundStore = () => {
  const soundContext = useContext(SoundContext);
  const { savedTracks } = soundContext;

  return (
    <div className="sound-store">
      {savedTracks.length > 0 &&
        savedTracks.map(savedTrack => (
          <SoundStoreItem key={savedTrack.id} savedTrack={savedTrack} />
        ))}
    </div>
  );
};

export default SoundStore;
