import { NavLink } from "react-router-dom"

const Navlink = function({ className="", content}){

    return(
        <NavLink className={`${className}`}>{content}</NavLink>
    )
}

export default Navlink