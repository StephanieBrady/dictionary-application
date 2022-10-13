import React, { useState } from "react";
import "./Dictionary.css";
export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <h1 className="dictionary-header">Magpie dictionary</h1>
      <form onSubmit={search}>
        <input
          className="input-form"
          type="search"
          placeholder="What word would you like to information about?"
          onChange={handleKeywordChange}
        />
        <br />
      </form>
    </div>
  );
}
