import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    console.log(apiUrl);
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
        <button type="button" class="btn btn-dark text-center mt-3">
          search
        </button>
        <br />
      </form>
    </div>
  );
}
