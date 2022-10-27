import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let pexelsApiKey =
      "563492ad6f91700001000001b2c0effa42ad4072b6c69884108cb646";
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };

    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <section>
        <h1 className="dictionary-header mt-2">Magpie Dictionary</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="input-form mt-3 mb-2"
            type="search"
            placeholder=""
            onChange={handleKeywordChange}
          />
          <br />
          What word would you like to search for?
          <br />
          <button
            type="button"
            className="btn btn-dark text-center mt-3 "
            onClick={handleSubmit}
          >
            search
          </button>
          <br />
        </form>
      </section>
      <br />
      <br />

      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
