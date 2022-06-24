import withCounter from "./withCounter";

const HoverCounter = (props) => {
	return (
		<div>
			<h2 onMouseOver={props.addOne}>hover count: {props.count}</h2>
		</div>
	);
};

export default withCounter(HoverCounter);
