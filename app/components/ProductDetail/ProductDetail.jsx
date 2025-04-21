"use client";
import { useContext, useState } from "react";
import { ProductPageImage } from ".."
import { CartContext } from "@/app/context/CartContext";

export const ProductDetail = ({productData}) => {
    const { addToCart } = useContext(CartContext);
    const [colorSelected, setColorSelected] = useState("white");

    return (
            <section id="productPage">
                <ProductPageImage images={productData.images} />
                <div id="productPageInfo">
                    <h1>{productData.name}</h1>
                    <p>Select Color:</p>
                    <div id="productPageInfoColors">
                        <div className={colorSelected == "white" ? "colorSelectedTrue" : null} onClick={() => setColorSelected("white")}></div>
                        <div className={colorSelected == "blue" ? "colorSelectedTrue" : null} onClick={() => setColorSelected("blue")}></div>
                        <div className={colorSelected == "black" ? "colorSelectedTrue" : null} onClick={() => setColorSelected("black")}></div>
                        <div className={colorSelected == "red" ? "colorSelectedTrue" : null} onClick={() => setColorSelected("red")}></div>
                        <div className={colorSelected == "grey" ? "colorSelectedTrue" : null} onClick={() => setColorSelected("grey")}></div>
                    </div>
                    <p>${productData.price}</p>
                    <button onClick={() => addToCart({...productData, color: colorSelected})}>Add to cart</button>
                </div>
            </section>
        )
}