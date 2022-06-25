import { CounterContext, CounterContextDispatch } from "./CounterProvider";
import { useContext } from "react";
const CountOne = () => {
	const count = useContext(CounterContext);
	const setState = useContext(CounterContextDispatch);
	return (
		<div>
			<h2>Count is : {count}</h2>
			<button onClick={() => setState(count + 1)}>addOne</button>
		</div>
	);
};

export default CountOne;
