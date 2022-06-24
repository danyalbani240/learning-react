import { useEffect, useRef, useState } from "react";

const Ref = () => {
	const [name, setName] = useState("");

	const prevValue = useRef();

	const handleChange = (e) => {
		setName(e.target.value);
	};
	useEffect(() => {
		prevValue.current = name;
	}, [name]);

	return (
		<div>
			<input value={name} type="text" onChange={(e) => handleChange(e)} />
			<p>
				my name is {name} and it used to be {prevValue.current}
			</p>
		</div>
	);
};

export default Ref;
