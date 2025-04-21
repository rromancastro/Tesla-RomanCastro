import { getAllProducts } from "./getAllProducts"

export const getProductById = async (id) => {
    const items = await getAllProducts();
    const product = items.find(item => item.id === id);

    return product;
}