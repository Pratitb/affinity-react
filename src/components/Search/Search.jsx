import { FaSearch } from 'react-icons/fa';
import './Search.scss';
import { useState } from 'react';

function Search({ filterTableData }) {
	const [searchQuery, setSearchQuery] = useState('');

	return (
		<div className="search">
			<FaSearch className="search_icon" />
			<input
				type="text"
				name="header_search"
				id="header_search"
				className="search_input"
				placeholder="Search for something"
				value={searchQuery}
				onInput={(e) => {
					setSearchQuery(e.target.value);
					filterTableData(e.target.value);
				}}
			/>
		</div>
	);
}

export default Search;
