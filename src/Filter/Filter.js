import { useProductsActions } from "../Providers/ProductsProvider";

const Filter = () => {
	const dispatch = useProductsActions();
	return (
		<div style={{ margin: "10px 0" }}>
			<label htmlFor="size">filter base on size:</label>
			<select
				onChange={(e) =>
					dispatch({
						type: "filter",
						event: e,
					})
				}
				id="size"
			>
				<option value={"All"}>All</option>
				<option value={"XL"}>XL</option>
				<option value={"L"}>L</option>
				<option value={"XXL"}>XXL</option>
			</select>
		</div>
	);
};

export default Filter;
