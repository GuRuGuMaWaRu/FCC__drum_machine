import React, { useContext } from "react";
// import SimpleBar from "simplebar-react";
// import "simplebar/dist/simplebar.min.css";

import SoundStoreItem from "./SoundStoreItem";
import SoundContext from "../../context/sound/soundContext";
import "./SoundStore.css";

const SoundStore = () => {
  const soundContext = useContext(SoundContext);
  const { savedTracks, deleteTrack, selectTrack } = soundContext;

  const handleSelectTrack = id => {
    selectTrack(id);
  };

  const handleDeleteTrack = id => {
    deleteTrack(id);
  };

  return (
    // <SimpleBar className="sound-store" forceVisible="y" autoHide={false}>
    <div className="sound-store">
      {savedTracks.length > 0 &&
        savedTracks.map(savedTrack => (
          <SoundStoreItem
            key={savedTrack.id}
            savedTrack={savedTrack}
            handleSelectTrack={handleSelectTrack}
            handleDeleteTrack={handleDeleteTrack}
          />
        ))}
    </div>
    // </SimpleBar>
  );
};

export default SoundStore;
