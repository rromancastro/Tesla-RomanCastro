import { ProductDetail} from "@/app/components";
import { getProductById } from "@/app/hooks/getProductById";

export default async function ProductPage({ params }) {
    const {id} = await params;

    const productData = await getProductById(id);

    return (
        <ProductDetail productData={productData} />
    )
}