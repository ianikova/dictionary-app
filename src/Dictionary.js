import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Title from "./Title";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.default);
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);

  // eslint-disable-next-line
  useEffect(search, []);

  function handleDictionResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event?.preventDefault();

    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001760b581d60d041d2b4a7e771d0d3e1a1";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=10`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
              value={keyword}
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
        {results ? <Title results={results} /> : null}
        <div class="row">
          <div class="col-md">
            <Results results={results} />
          </div>
          <div class="col-md">
            <Photos photos={photos} />
          </div>
        </div>
      </section>
    </div>
  );
}
