import React from 'react';

import MenuItem from './MenuItem.js';

export default class SideBar extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		activeSection: null	
		};
	}

	render() {
		const menuItems = [
			{
				name: 'Home',
				id: 'home'
			},
			{
			 	name: 'About Me',
				id: 'about'
			},
			{
				name: 'My Work',
				id: 'work'			
			},
			{
				name: 'Contact',
				id: 'contact'			
			}];

		return (
			<div>
				{menuItems.map(item => <MenuItem 
					key={item} 
					name={item.name} 
					id={item.id} 
				/>)}
		</div>
		);
	}
};