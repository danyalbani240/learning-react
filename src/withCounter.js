import { useState } from "react";
const withCounter = (WrappedComponent) => {
	const ChangedComponent = (props) => {
		const [count, setCount] = useState(0);

		const addOne = () => {
			setCount((oldVal) => oldVal + 1);
		};
		return <WrappedComponent count={count} addOne={addOne} {...props} />;
	};
	return ChangedComponent;
};
export default withCounter;
