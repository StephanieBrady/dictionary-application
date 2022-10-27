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
              <span classname="Definition">Definition: </span>
              {definition.definition}
              <br />
              <span className="Example">Example: </span>
              <em> {definition.example} </em>
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
