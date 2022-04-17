import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h1>Which word are you looking for?</h1>
        <form onSubmit={search}>
          <div className="Search-bar input-group mb-3">
            <input
              type="search"
              className="form-control"
              onChange={handleKeywordChange}
            />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary">Search</button>
            </div>
          </div>
        </form>
        <div className="hint">i.e. sunrise, wine, book, horse </div>
      </section>
      <section>
        <Results results={results} />
      </section>
    </div>
  );
}
