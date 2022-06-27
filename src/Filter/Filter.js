import { useProductsActions } from "../Providers/ProductsProvider";
import Select from "react-select";
import styles from "./filter.module.css";
import { useEffect, useState } from "react";
const Filter = () => {
	let [value, setValue] = useState("");
	let [sort, setSort] = useState("");
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
	};
	useEffect(() => {
		if (sort !== "") {
			dispatch({
				type: "sort",
				selectedOption: sort,
			});
		}
	}, [sort]);
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
				<p>Size:</p>
				<div className={styles.selectContainer}>
					<Select
						options={[
							{
								label: "highest",
								value: "highest",
							},
							{
								label: "lowest",
								value: "lowest",
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
