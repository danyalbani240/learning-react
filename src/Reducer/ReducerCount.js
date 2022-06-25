import { useReducer } from "react";

const ReducerCount = () => {
	const [count, dispatch] = useReducer((state, action) => {
		if (action === "addOne") {
			return state + 1;
		} else if (action === "addFive") {
			return state + 5;
		} else if (action === "decrement") {
			return state - 1;
		} else {
			return state;
		}
	}, 0);
	return (
		<div>
			h1: {count}
			<button onClick={() => dispatch("addOne")}>add One</button>
			<button onClick={() => dispatch("addFive")}>add Five</button>
			<button onClick={() => dispatch("decrement")}>decrement</button>
		</div>
	);
};

export default ReducerCount;
