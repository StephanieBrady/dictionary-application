import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning shadow p-3 mb-1 bg-body rounded">
      <h3 className="PartofSpeech">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div>
              <span classname="Definition">{definition.definition}</span>
              <br />
              <span className="Example">
                Example: {""}
                {definition.example}
              </span>
              <br />
              <span className="Synonym">Synonyms: </span>
              <Synonyms synonyms={definition.synonyms} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
