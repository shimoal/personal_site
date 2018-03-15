import React from 'react';

export default function MenuItem(props) {
	const {name, id} = props;
	return (
		<p><a href={`#${id}`}>{name}</a></p>
	);
}