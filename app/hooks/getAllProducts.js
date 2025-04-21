export const getAllProducts = async () => {
    const response = await fetch("http://localhost:3000/api/products", {cache:"no-store"});
    const items = await response.json();

    return items;
}