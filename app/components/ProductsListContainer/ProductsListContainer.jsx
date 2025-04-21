"use client"
import { ItemCard } from ".."

export const ProductsListContainer = ({data}) => {

    return (
        <section id="productsListContainer">
            {
                data.map(prod => {
                    return (<ItemCard key={prod.id} prod={prod}/>)
                })
            }
        </section>
    )
}