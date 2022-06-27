import { createContext, useContext, useReducer, useState } from "react";

const ProductsContext = createContext();
const ProductsContextDispatch = createContext();
const ProductsProvider = ({ children }) => {
	const AllProducts = [
		{
			price: 200,
			title: "javascript course",
			number: 1,
			id: "1",
			availableSizes: ["XL"],
		},
		{
			price: 300,
			title: "Vue course",
			number: 1,
			id: "2",
			availableSizes: ["XXL"],
		},
		{
			price: 400,
			title: "Nuxt course",
			number: 1,
			id: "3",
			availableSizes: ["L"],
		},
		{
			price: 500,
			title: "Pwa course",
			number: 1,
			id: "4",
			availableSizes: ["XL", "XXL"],
		},
		{
			price: 600,
			title: "Design Pattern course",
			number: 1,
			id: "5",
			availableSizes: ["L", "XXL"],
		},
	];
	const [products, dispatch] = useReducer(
		(state, action) => {
			switch (action.type) {
				case "delete":
					let index = state.findIndex(
						(item) => item.id === action.id
					);
					const filteredProducts = state.filter(
						(item) => item.title !== state[index].title
					);
					return filteredProducts;

				case "increment": {
					let index = state.findIndex(
						(item) => item.id === action.id
					);
					let newProduct = { ...state[index] };
					newProduct["number"] = state[index].number + 1;
					//findIndex

					let productsClone = [...state];
					productsClone.splice(index, 1, newProduct);
					return productsClone;
				}
				case "decrement": {
					let index = state.findIndex(
						(item) => item.id === action.id
					);
					if (state[index].number == 1) {
						const filteredProducts = state.filter(
							(item) => item.title !== state[index].title
						);
						return filteredProducts;
					}
					let newProduct = { ...state[index] };
					newProduct["number"] = state[index].number - 1;
					//findIndex

					let productsClone = [...state];
					productsClone.splice(index, 1, newProduct);
					return productsClone;
				}
				case "change": {
					let index = state.findIndex(
						(item) => item.id === action.id
					);
					let clonedProduct = { ...state[index] };
					clonedProduct.title = action.event.target.value;
					let updatedProducts = [...state];
					updatedProducts[index] = clonedProduct;
					return updatedProducts;
				}
				case "filter": {
					if (action.selectedOption === "All") {
						return [...AllProducts];
					} else {
						return AllProducts.filter((product) =>
							product.availableSizes.includes(
								action.selectedOption
							)
						);
					}
				}
				case "sort": {
					const products = [...state];

					if (action.selectedOption === "lowest") {
						return products.sort((a, b) => a.price - b.price);
					} else if (action.selectedOption === "highest") {
						return products
							.sort((a, b) => a.price - b.price)
							.reverse();
					} else {
						return [...state];
					}
				}
			}
		},
		[...AllProducts]
	);
	return (
		<ProductsContext.Provider value={products}>
			<ProductsContextDispatch.Provider value={dispatch}>
				{children}
			</ProductsContextDispatch.Provider>
		</ProductsContext.Provider>
	);
};

export default ProductsProvider;
//custom hooks to get Products and actions

export const useProducts = () => useContext(ProductsContext);
export const useProductsActions = () => {
	return useContext(ProductsContextDispatch);
};
