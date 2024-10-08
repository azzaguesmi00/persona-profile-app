import React, { Component } from "react";
import "./App.css";
import Profile from "./Component/Profile";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { show: false };
	}

	toggle = () => {
		this.setState({ show: !this.state.show });
	};
	render() {
		return (
			<div className='App'>
				<h1>Checkpoint React State</h1>
				<button onClick={this.toggle}>Toggle</button>
				{this.state.show && <Profile />}
			</div>
		);
	}
}
  
