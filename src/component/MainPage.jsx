import axios from "axios";
import { useEffect, useState } from "react";

const MainPage = () => {
	const apiUrl = "http://hn.algolia.com/api/v1/search_by_date?tags=story";
	const [articles, setArticles] = useState(null);
	useEffect(() => {
		axios
			.get(apiUrl)
			.then(res => setArticles(res.data.hits))
			.catch(err => console.error(err));
	}, [setArticles]);

	return (
		<div>
			{articles ? (
				articles.map(article => (
					<>
						<h2 key={`headline_${article.objectID}`}>
							{console.log(article)}
							{"(" + article.created_at + ") " + article.title}
						</h2>
						<a key={`url_${article.objectID}`} href={article.url}>
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
