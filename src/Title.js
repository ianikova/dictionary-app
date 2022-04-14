import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeLow } from "@fortawesome/free-solid-svg-icons";
import "./Title.css";

export default function Title(props) {
  const phonetic = props.results.phonetics.find((el) => !!el.audio);

  function playAudio() {
    new Audio(phonetic.audio).play();
  }

  if (phonetic) {
    return (
      <div className="wrapper">
        <button className="sound-icon" disabled={!phonetic} onClick={playAudio}>
          <FontAwesomeIcon icon={faVolumeLow} />
        </button>
        <div className="text-wrapper">
          <div className="word">{props.results.word}</div>
          <div className="phonetics">
            <span className="phonetics-text">{phonetic.text}</span>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
