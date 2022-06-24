import React, { Component, createRef } from "react";
class Ref extends Component {
	constructor() {
		super();
		this.inputRef = createRef();
	}
	componentDidMount() {
		this.inputRef.current.focus();
	}
	render() {
		return <input type="text" ref={this.inputRef} />;
	}
}

export default Ref;
