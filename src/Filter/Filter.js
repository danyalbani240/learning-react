import { useProductsActions } from "../Providers/ProductsProvider";
import Select from "react-select";
import styles from "./filter.module.css";
import { useEffect, useState } from "react";
const Filter = () => {
	let [value, setValue] = useState("All");
	let [sort, setSort] = useState("lowest");
	const dispatch = useProductsActions();
	const changeHandler = (selectedOption) => {
		setValue(selectedOption.value);
		dispatch({
			type: "filter",
			selectedOption: selectedOption.value,
		});
		if (sort !== "") {
			dispatch({
				type: "sort",
				selectedOption: sort,
			});
		}
	};
	const sortHandler = (selectedOption) => {
		setSort(selectedOption.value);
		dispatch({
			type: "sort",
			selectedOption: selectedOption.value,
		});
	};
	// useEffect(() => {
	// 	if (sort !== "") {
	// 	}
	// }, [sort]);
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
						value={value}
						isSearchable={false}
						placeholder={value}
					/>
				</div>
			</div>
			<div className={styles.size}>
				<p>price:</p>
				<div className={styles.selectContainer}>
					<Select
						options={[
							{
								label: "lowest",
								value: "lowest",
							},
							{
								label: "highest",
								value: "highest",
							},
						]}
						onChange={sortHandler}
						value={sort}
						isSearchable={false}
						placeholder={sort}
					/>
				</div>
			</div>
		</div>
	);
};

export default Filter;
