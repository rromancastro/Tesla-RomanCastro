"use client";
import { AuthContext } from "@/app/context/AuthContext";
import Image from "next/image";
import { useContext, useState } from "react";

export default function LoginPage() {
    const { logInUser } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await logInUser(email, password);
    }

    return (
        <section id="loginPage">
            <Image src="/teslaIcon.webp" alt="Logo" width={200} height={200} id="loginPageLogo"/>
            <h1>Login Admin</h1>
            <form>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" required value={email} onInput={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" required value={password} onInput={(e) => setPassword(e.target.value)}/>
                </div>
                <button onClick={handleSubmit}>Enter</button>
            </form>
        </section>
    )
}