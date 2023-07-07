import axios from "axios";
import { useEffect, useState } from "react";
import SearchComponent from "./SearchComponent";

const MainPage = () => {
	const apiUrl =
		"http://hn.algolia.com/api/v1/search_by_date?query=<QUERY>&tags=story";
	const [articles, setArticles] = useState(null);

	useEffect(() => {
		axios
			.get(apiUrl.replace("<QUERY", ""))
			.then(res => setArticles(res.data.hits))
			.catch(err => console.error(err));
	}, [setArticles]);

	const search = event => {
		event.preventDefault();
		const searchString = event.target.search.value;
		axios
			.get(apiUrl.replace("<QUERY>", searchString.toLowerCase()))
			.then(res => setArticles(res.data.hits))
			.catch(err => console.error(err));
	};

	return (
		<div>
			<SearchComponent search={search} />
			{articles ? (
				articles.map(article => (
					<>
						<h2 key={`headline_${article.objectID}`}>
							{"(" + article.created_at + ") " + article.title}
						</h2>
						<a
							key={`url_${article.objectID}`}
							href={article.url}
							target="_blank"
							rel="noreferrer"
						>
							{article.url}
						</a>
						<hr />
					</>
				))
			) : (
				<h2>Loading ...</h2>
			)}
		</div>
	);
};

export default MainPage;
