import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);
  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(handleResponse);
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
        <h1 className="dictionary-header mt-2">Magpie dictionary</h1>
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
            className="btn btn-dark text-center mt-3 mb-4"
            onClick={handleSubmit}
          >
            search
          </button>
          <br />
        </form>
      </section>
      <br />
      <br />
      <hr className="FormDivider"></hr>
      <Results results={results} />
    </div>
  );
}
