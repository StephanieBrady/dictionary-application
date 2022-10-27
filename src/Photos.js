import React from "react";
import "./Photos";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section className="Photos shadow p-3 mb-1 bg-body rounded">
        <div className="row mt-3 ms-1 me-1">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4 mb-4 " key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img src={photo.src.landscape} className="img-fluid" />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
