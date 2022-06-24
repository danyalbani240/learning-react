import { useState } from "react";
import withCounter from "./withCounter";
const HookCounter = () => {
	const [count, setCount] = useState(0);
	const addOne = () => {
		setCount((old) => old + 1);
	};
	return (
		<div className="hook-counter">
			<h2>count - {count}</h2>
			<button onClick={addOne}>addOne</button>
		</div>
	);
};
export default HookCounter;
