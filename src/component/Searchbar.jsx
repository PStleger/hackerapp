import React, { useState } from "react";
import Results from "./Results";

const SearchBar = ({ article }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const results = article.filter(
      (item) => item && item.title && item.title.includes(searchQuery)
    );
    setSearchResults(results);
    console.log("Perform search:", searchQuery);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Enter your search query"
        />
        <button type="submit">Search</button>
      </form>
      {searchResults.length > 0 ? (
        <>
        <p>We have found {searchResults.length} results:</p>
        <Results data={searchResults}/>
        </>
      ) : (
        <p>No search results to display.</p>
      )}
    </div>
  );
};

export default SearchBar;
