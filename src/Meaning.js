import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning shadow p-3 mb-1 bg-body rounded">
      <h3 className="PartofSpeech">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions && (
        <div>
          {" "}
          <span className="Definition">
            {props.meaning.definitions[0].definition}
          </span>
        </div>
      )}
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div>
              {definition.example && (
                <>
                  <br />
                  <span className="Example">
                    <strong> Example: {""}</strong>
                    <em>{definition.example}</em>
                  </span>
                </>
              )}
              {definition.synonyms?.length > 0 && (
                <>
                  <br />
                  <span className="Synonym">Synonyms: </span>
                  <Synonyms synonyms={definition.synonyms} />
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
