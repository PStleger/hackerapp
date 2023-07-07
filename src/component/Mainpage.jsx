import { useEffect, useState } from "react";
import SearchBar from "./Searchbar";
import Results from "./Results";

const Mainpage = () => {
  const [article, setArticle] = useState(null);
  const [hits, setHits] = useState("");
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const apiUrl = "http://hn.algolia.com/api/v1/search?query=react&tags=story";

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setArticle(data.hits);
        setHits(data.nbHits);
        setQuery(data.query);
        setIsLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);
  return (
    <div>
      <header>
        <nav>
          <h1>Hacker News</h1>
          <ul>
            <li>
              Home
            </li>
            <li>About</li>
            <li>React Articles</li>
            <li>JavaScript Articles</li>
            <li>HTML Articles</li>
          </ul>
        </nav>
      </header>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {article && article.length > 0
            ? `There are ${hits} articles containing "${query}"`
            : "There are no results to display at the moment"}
          ;
          <SearchBar article={article} />
        </>
      )}
    </div>
  );
};

export default Mainpage;
