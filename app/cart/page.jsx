"use client";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import countriesArray from "../helpers/countries";
import Swal from 'sweetalert2'
import { useRouter } from "next/navigation";


export default function CartPage() {
    const router = useRouter();

    const { cart, removeItem, clearCart, totalPrice, totalItems } = useContext(CartContext);

    const handleCompletePurchase = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Thank you for your purchase!",
            icon: "success",
            draggable: true,
            showConfirmButton: false,
            timer: 3000,
        });
        setTimeout(() => {
            clearCart();
            router.replace('/');
        }, 3000);
    }

    return (
        <section id="cartSection">
            <div id="cartSectionItems">
                {
                    cart.length > 0 ? (
                        cart.map((item) => (
                            <article key={item.id}>
                                <Image src={item.images[0]} alt={item.name} width={1000} height={1000} id="cartItemImage"/>
                                <h2>{item.name}</h2>
                                <p>Price: ${item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                                <IoMdClose id="removeItemIcon" style={{cursor: 'pointer'}} onClick={() => removeItem(item.id)}/>
                            </article>
                        ))
                    ) : (
                        <h2>Your cart is empty</h2>
                    )
                }
            </div>
            <div id="cartCheckoutSection">
                <h1>Total Price: ${totalPrice} {`(${totalItems} products)`}</h1>
                {
                    cart.length > 0 ? 
                        <section id="cartCheckoutSectionData">
                            <form>
                                <div className="formGroup" style={{gridArea: 'area1'}}>
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" required/>
                                </div>
                                <div className="formGroup" style={{gridArea: 'area2'}}>
                                    <label htmlFor="lastname">Last Name</label>
                                    <input type="text" id="lastname" required/>
                                </div>
                                <div className="formGroup" style={{gridArea: 'area3'}}>
                                    <label htmlFor="email">E-Mail</label>
                                    <input type="text" id="email" required/>
                                </div>
                                <div className="formGroup" style={{gridArea: 'area4'}}>
                                    <label htmlFor="phoneNumber">Phone Number</label>
                                    <input type="text" id="phoneNumber" required/>
                                </div>
                                <div className="formGroup" style={{gridArea: 'area5'}}>
                                    <label htmlFor="address">Address</label>
                                    <input type="text" id="address" required/>
                                </div>
                                <div className="formGroup" style={{gridArea: 'area6'}}>
                                    <label htmlFor="city">City</label>
                                    <input type="text" id="city" required/>
                                </div>
                                <div className="formGroup" style={{gridArea: 'area7'}}>
                                    <label htmlFor="postalCode">Postal Code</label>
                                    <input type="text" id="postalCode" required/>
                                </div>
                                <div className="formGroup" style={{gridArea: 'area8'}}>
                                    <label htmlFor="country">Country</label>
                                    <select type="text" id="country" required>
                                        <option value="">Select a country</option>
                                        {
                                            countriesArray.map((country) => (
                                                <option key={country.code} value={country.code}>{country.name}</option>
                                            ))
                                        }   
                                    </select>
                                </div>
                                <button onClick={handleCompletePurchase} style={{gridArea: 'area9'}}>Complete Purchase</button>
                            </form>
                        </section> :
                        null
                }
            </div>
        </section>
    )
}