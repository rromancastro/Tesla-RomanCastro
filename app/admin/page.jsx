"use client";

import { useState } from "react";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export default function CreateUserPage() {
    const [nameProduct, setNameProduct] = useState("");
    const [priceProduct, setPriceProduct] = useState("");
    const [categoryProduct, setCategoryProduct] = useState("");
    const [imageLink1, setImageLink1] = useState("");
    const [imageLink2, setImageLink2] = useState("");
    const [imageLink3, setImageLink3] = useState("");

    const product = {
        name: nameProduct,
        price: priceProduct,
        category: categoryProduct,
        images: [imageLink1, imageLink2, imageLink3]
    }

    //logica firestore

    const handleSubmit = async (e) => {
        e.preventDefault();
        const docRef = collection(db, "products");
        await addDoc(docRef, product)
            .then(() => {
                console.log("Document written with ID: ", docRef.id);
                setNameProduct("");
                setPriceProduct("");
                setImageLink1("");
                setImageLink2("");
                setImageLink3("");
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }

    return (
        <section id="createPage">
            <h1>Create Product</h1>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" required value={nameProduct} onInput={(e) => setNameProduct(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="name">Category:</label>
                    <input type="text" id="name" required value={categoryProduct} onInput={(e) => setCategoryProduct(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="name">Price:</label>
                    <input type="text" id="name" required value={priceProduct} onInput={(e) => setPriceProduct(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="name">Image Link 1:</label>
                    <input type="text" id="name" required value={imageLink1} onInput={(e) => setImageLink1(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="name">Image Link 2:</label>
                    <input type="text" id="name" required value={imageLink2} onInput={(e) => setImageLink2(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="name">Image Link 3:</label>
                    <input type="text" id="name" required value={imageLink3} onInput={(e) => setImageLink3(e.target.value)}/>
                </div>
            </form>
            <button onClick={handleSubmit}>Submit</button>
        </section>
    )
}