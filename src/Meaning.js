import React from "react";
import Synonyms from "./Synonyms";
import "./Meanings.css";

export default function Meaning(props) {
  return (
    <div className="Meanings">
      <h4>{props.meaning.partOfSpeech}</h4>
      <div>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              {definition.definition ? (
                <div className="Definition">
                  Definition: {definition.definition}{" "}
                </div>
              ) : null}
              {definition.example ? (
                <div className="Example">Example: {definition.example}</div>
              ) : null}
              <Synonyms synonyms={definition.synonyms} />
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}
