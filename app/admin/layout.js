"use client";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import LoginPage from "./@login/page";
import { Layout } from "../layout/Layout";

export default function AdminLayout({ children }) {
    const { user } = useContext(AuthContext);

    return (
        <>{user.logged ? children : <LoginPage />}</>
    )
}

