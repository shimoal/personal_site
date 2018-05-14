import React from 'react';
import selfImageSource from '../../assets/self.jpg';

export default function HomePage() {
	return (
		<div id="home">
			<h1>Hello!</h1>
			<img src={selfImageSource} />

			<h2>My name is Alison, and I like making cool things</h2>
		</div>
	);
};