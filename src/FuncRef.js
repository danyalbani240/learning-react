import { useEffect, useRef } from "react";

const FuncRef = () => {
	const inputRef = useRef();
	useEffect(() => {
		inputRef.current.focus();
	}, []);
	return <input ref={inputRef} />;
};

export default FuncRef;
