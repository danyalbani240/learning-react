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
	const theme = (theme) => ({
		...theme,
		colors: {
			...theme.colors,
			primary25: "#F2CCF0",
		},
	});
	const style = {
		control: (base) => ({
			...base,
			borderColor: "#E29CE5",
		}),
		placeholder: (base) => ({
			...base,
			color: "#AE3BCB",
			fontSize: "18px",
		}),
	};
	return (
		<div className={styles.filterContainer}>
			<h4>Filter By :</h4>
			<div className={styles.size}>
				<p>Size:</p>
				<div className={styles.selectContainer}>
					<Select
						defaultValue={"All"}
						styles={style}
						options={options}
						onChange={changeHandler}
						value={value}
						isSearchable={false}
						placeholder={value}
						theme={theme}
					/>
				</div>
			</div>
			<div className={styles.size}>
				<p>price:</p>
				<div className={styles.selectContainer}>
					<Select
						styles={style}
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
						theme={theme}
					/>
				</div>
			</div>
		</div>
	);
};

export default Filter;
