import { useState } from "react";
import { useProductsActions } from "../../components/Providers/ProductsProvider";
import styles from "./search.module.css";
const Search = ({ filterValue, onChange }) => {
	const [value, setValue] = useState("");
	const dispatch = useProductsActions();
	const changeHandler = (e) => {
		setValue(e.target.value);
		dispatch({
			type: "filter",
			selectedOption: filterValue,
		});
		dispatch({ type: "search", searchedText: e.target.value });
		onChange(e.target.value);
	};
	return (
		<div className={styles.container}>
			<label htmlFor="search">Search For:</label>
			<input
				type={"text"}
				className={styles.searchinput}
				onChange={changeHandler}
				value={value}
				placeholder="Product ..."
			/>
		</div>
	);
};

export default Search;
