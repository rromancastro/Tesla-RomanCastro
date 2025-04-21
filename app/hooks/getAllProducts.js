export const getAllProducts = async () => {
    const response = await fetch("https://tesla-roman-castro.vercel.app/api/products", {cache:"no-store"});
    const items = await response.json();

    return items;
}