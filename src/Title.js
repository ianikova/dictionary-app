import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import "./Title.css";

export default function Title(props) {
  const phonetic = props.results.phonetics.find((el) => !!el.audio);

  function playAudio() {
    new Audio(phonetic.audio).play();
  }

  if (phonetic) {
    return (
      <div className="TitleResults">
        <h2>{props.results.word}</h2>
        <button className="sound-icon" disabled={!phonetic} onClick={playAudio}>
          <FontAwesomeIcon icon={faHeadphones} />
        </button>
        <h3>{phonetic.text}</h3>
      </div>
    );
  } else {
    return null;
  }
}
