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

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <h1 className="dictionary-header">Magpie dictionary</h1>
      <form onSubmit={search}>
        <input
          className="input-form mt-3"
          type="search"
          placeholder="What word would you like to search for?"
          onChange={handleKeywordChange}
        />
        <br />
        <button type="button" className="btn btn-dark text-center mt-3">
          search
        </button>
        <br />
      </form>
      <Results results={results} />
    </div>
  );
}
