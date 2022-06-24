const Memo = (props) => {
	return <div>memo component {props.name}</div>;
};
// it's actually an high order component that checks if there is a change or not so it's easy
export default React.memo(Memo);
