import React from "react";
import PropTypes from "prop-types";

const SearchComponent = ({ search }) => {
	return (
		<>
			<form onSubmit={search}>
				<input
					name="search"
					type="text"
					placeholder="place your search term here"
				/>
				<button type="submit">Search</button>
			</form>
		</>
	);
};

SearchComponent.propTypes = {
	search: PropTypes.func.isRequired,
};

export default SearchComponent;
