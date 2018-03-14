import React from 'react';

import AboutPage from './pages/AboutPage.js';
import ContactPage from './pages/ContactPage.js';
import HomePage from './pages/HomePage.js';
import MyWorkPage from './pages/MyWorkPage.js';

export default function App() {
	return (
		<div>
			<HomePage />
			<AboutPage />
			<MyWorkPage />
			<ContactPage />
		</div>
	);
};