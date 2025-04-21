import { ProductsListContainer } from "@/app/components";
import { getProductsByCategory } from "@/app/hooks/getProductsByCategory";

export default async function ProductsPage({ params }) {
    const { category } = await params;

    const items = await getProductsByCategory(category);

    return (
        <ProductsListContainer data={items}/>
    )
}