import React from 'react';

export default class SideBar extends React.Component {

	constructor(props){
		super(props);
		this.state = {
		activeSection: null	
		};
	}

	render() {
		return (<div>
			<p>Home</p>
			<p>About Me</p>
			<p>My Work</p>
			<p>Contact</p>
		</div>
		);
	}
};