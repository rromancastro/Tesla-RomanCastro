
import { Footer, Navbar } from "../components"

export const Layout = ({ children}) => {
    


    return (
        <>
            <Navbar/>
            {children}
            <Footer/>
        </>
    )
}