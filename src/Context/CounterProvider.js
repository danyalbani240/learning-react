import { createContext, useState } from "react";

export const CounterContext = createContext();
export const CounterContextDispatch = createContext();
const CounterProvider = ({ children }) => {
	const [count, setCount] = useState(4);
	return (
		<CounterContext.Provider value={count}>
			<CounterContextDispatch.Provider value={setCount}>
				{children}
			</CounterContextDispatch.Provider>
		</CounterContext.Provider>
	);
};

export default CounterProvider;
