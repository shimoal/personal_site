import React from 'react';

import MenuItem from './MenuItem.js';
import style from '../../styles/SideBar.css';

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
			<div className="SideBar">
				{menuItems.map(({id, name})=> <MenuItem key={id} name={name} id={id} />)}
		</div>
		);
	}
};