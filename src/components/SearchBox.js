import React from 'react';

const SearchBox = ({searchChange}) => {
	return (
		<div className="pa2	">
			<input onChange={searchChange} type = "text" id = "SearchBox" placeholder="search robot" className="bg-light-blue pa2" autoFocus/>
		</div>
	);
}

export default SearchBox;