import { Outlet } from "react-router-dom"
import Nav from "./Nav"
import Footer from "./footer/Footer"
import Copyright from "./footer/Copyright"

const RootLayout = function(){

    return(
        <>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
            <Copyright></Copyright>
        </>
    )
}

export default RootLayout