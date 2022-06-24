import React, { Component } from "react";
import Pure from "./Pure";
import Reg from "./Reg";
class Parent extends Component {
	state = { name: "Danyal" };
	componentDidMount() {
		setInterval(() => this.setState({ name: "Danyal" }), 1000);
	}
	render() {
		console.log("p");
		return (
			<div>
				{this.state.name}
				<Reg name={this.state.name} />
				{/* pure component will checks the prevProp And State and if there was a change then it will Rerender if there wasn't well it stays same and it makes performance better */}
				<Pure name={this.state.name} />
			</div>
		);
	}
}

export default Parent;
