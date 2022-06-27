import { useState } from "react";
import styles from "./search.module.css";
const Search = (props) => {
	const [value, setValue] = useState("");
	const changeHandler = (e) => {
		setValue(e.target.value);
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
