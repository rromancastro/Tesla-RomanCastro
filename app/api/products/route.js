import { collection, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";
import { db } from "../../firebase/config";

export async function GET(request) {
    const ProductsRef = collection(db, "products");
    const querySnapshot = await getDocs(ProductsRef);

    const docs = querySnapshot.docs.map((doc) => {
        return {
            id: doc.id,
            ...doc.data(),
        };
    });

    return NextResponse.json(docs);
}