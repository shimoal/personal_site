import React from 'react';

import AboutPage from './AboutPage.js';
import ContactPage from './ContactPage.js';
import HomePage from './HomePage.js';
import MyWorkPage from './MyWorkPage.js';

export default function Content() {
return (
		<div>
			<HomePage />
			<AboutPage />
			<MyWorkPage />
			<ContactPage />
		</div>
	);
}