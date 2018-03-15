import React from 'react';

import AboutPage from './AboutPage.js';
import ContactPage from './ContactPage.js';
import HomePage from './HomePage.js';
import MyWorkPage from './MyWorkPage.js';
import style from '../../styles/Content.css';

export default function Content() {
return (
		<div className="content">
			<HomePage />
			<AboutPage />
			<MyWorkPage />
			<ContactPage />
		</div>
	);
}