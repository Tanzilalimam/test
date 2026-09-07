import { Outlet } from "react-router-dom"
import DashNav from "./Dnav"
import DashFooter from "./Dfooter"

const DashRootLayout = function(){

    return(
        <>
            <DashNav></DashNav>
            <Outlet></Outlet>
            <DashFooter></DashFooter>
        </>
    )
}

export default DashRootLayout