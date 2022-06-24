import { useState } from "react";
import withCounter from "./withCounter";
const HookCounter = ({ count, addOne }) => {
	return (
		<div className="hook-counter">
			<h2>count - {count}</h2>
			<button onClick={addOne}>addOne</button>
		</div>
	);
};
export default withCounter(HookCounter);
