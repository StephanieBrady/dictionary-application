import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  console.log(props.synonyms.length);
  if (props.synonyms.length !== 0) {
    return (
      <span className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          return (
            <span
              key={index}
              className="list d-flex justify-content-start mt-0"
            >
              {synonym}{" "}
            </span>
          );
        })}
      </span>
    );
  } else {
    return null;
  }
}
