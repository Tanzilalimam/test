import { NavLink } from "react-router-dom"

const ErrorPage = function(){

    return(
        <div className="w-full h-screen flex flex-col justify-center items-center gap-10">
            <div className="flex items-center gap-5">
                <h1 className="text-6xl font-bold uppercase">404</h1>
                <span className="h-10 w-0.5 bg-black"></span>
                <p className="text-2xl font-semibold capitalize">page does not exist</p>
            </div>
            <NavLink to={"/"} className="text-3xl font-stretch-semi-condensed capitalize hover:underline hover:text-violet-700">
            back to home
            </NavLink>
        </div>
    )
}

export default ErrorPage