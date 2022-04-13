import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeLow, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import "./Title.scss";

const Title = (props) => {
  const results = props.results;
  const [audio, setAudio] = useState("");
  const [text, setText] = useState("");
  const [phoneticsList, setPhoneticsList] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const getData = () => {
    const foundPhoneticWithAudio = results.phonetics
      ? results.phonetics.find((el) => !!el.audio)
      : null;
    setAudio(new Audio(foundPhoneticWithAudio && foundPhoneticWithAudio.audio));
    setText(
      (foundPhoneticWithAudio && foundPhoneticWithAudio.text) ||
        results.phonetics[0].text
    );
    setPhoneticsList(results.phonetics);
  };

  useEffect(() => {
    if (results.phonetics) getData();
  }, []);

  const renderAudioIcon = (audioLink) => {
    const playAudioLink = () => new Audio(audioLink).play();
    return !!audioLink ? (
      <button onClick={playAudioLink} disabled={!results.phonetics}>
        <FontAwesomeIcon icon={faVolumeLow} />
      </button>
    ) : (
      ""
    );
  };

  const renderPhoneticsModal = () => (
    <ul
      className="phonetics-list"
      onMouseEnter={() => setModalOpen(true)}
      onMouseLeave={() => setModalOpen(false)}
    >
      {phoneticsList.map((el, index) => (
        <li key={index} className="phonetics-item">
          <span className="phonetics-text">{el.text}</span>
          <span className="small-sound-icon">{renderAudioIcon(el.audio)}</span>
        </li>
      ))}
    </ul>
  );

  const playAudio = () => audio.play();

  const handleClick = () => {
    if (modalOpen) {
      setModalOpen(false);
    } else {
      setModalOpen(true);
    }
  };
  return (
    <div className="wrapper">
      <button
        className="sound-icon"
        disabled={
          !results.phonetics || !results.phonetics.find((el) => !!el.audio)
        }
        onClick={playAudio}
      >
        <FontAwesomeIcon icon={faVolumeLow} />
      </button>
      <div className="text-wrapper">
        <div className="word">{results.word}</div>
        <div
          className={`phonetics ${
            !results.phonetics || !results.phonetics.find((el) => !!el.text)
              ? "hide-phonetics"
              : ""
          } `}
        >
          <span className="phonetics-text">{text}</span>
          <button
            className={`more-phonetics ${
              !results.phonetics || !results.phonetics[1]
                ? "hide-phonetics"
                : ""
            }`}
            onClick={handleClick}
            onMouseEnter={() => setModalOpen(true)}
            onMouseLeave={() => setModalOpen(false)}
          >
            <FontAwesomeIcon icon={faAnglesRight} />
          </button>
          {modalOpen && renderPhoneticsModal()}
        </div>
      </div>
    </div>
  );
};
export default Title;
