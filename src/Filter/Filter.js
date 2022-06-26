import { useProductsActions } from "../Providers/ProductsProvider";
import Select from "react-select";
import styles from "./filter.module.css";
const Filter = () => {
	const dispatch = useProductsActions();
	const changeHandler = (selectedOption) => {
		dispatch({
			type: "filter",
			selectedOption: selectedOption.value,
		});
	};
	const options = [
		{
			label: "All",
			value: "All",
		},
		{
			label: "XL",
			value: "XL",
		},
		{
			label: "L",
			value: "L",
		},
		{
			label: "XXL",
			value: "XXL",
		},
		,
	];
	return (
		<div className={styles.filterContainer}>
			<h2>Filter By :</h2>
			<div className={styles.size}>
				<p>Size:</p>
				<div className={styles.selectContainer}>
					<Select
						options={options}
						onChange={changeHandler}
						placeholder={"All"}
					/>
				</div>
			</div>
		</div>
	);
};

export default Filter;
