"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const ItemCard = ({prod}) => {

    const router = useRouter();
    const [image, setImage] = useState(0);
    
    return (
        <article onClick={() => router.replace("/product/" + prod.id)} key={prod.id}>
            <Image alt={prod.name} src={prod.images[image]} width={1920} height={1080} id="productListArticleImage" onMouseOver={() => setImage(1)} onMouseLeave={() => setImage(0)}/>
            <h2>{prod.name}</h2>
            <p>${prod.price}</p>
        </article>
    )
}