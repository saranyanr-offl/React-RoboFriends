import React from 'react';
import './Searchbox.css';

const Searchbox = ({searchChange }) => {
return (
	<div className="pa3">
	<input className="pa2 bg-light-blue" type="search" placeholder="search kittens" onChange={searchChange} />
	</div>
	)
};

export default Searchbox;