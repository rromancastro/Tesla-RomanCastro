import { getAllProducts } from "./getAllProducts"

export const getProductsByCategory = async (category) => {
    const items = await getAllProducts();
    const filteredItems = items.filter((item) => item.category === category);

    return filteredItems;
}