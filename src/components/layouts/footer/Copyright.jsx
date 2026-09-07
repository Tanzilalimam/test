import Para from "../../../ui/Para"
import { NavLink } from "react-router-dom"

const Copyright = function(){
let date = new Date();
let crrYear = date.getFullYear();
console.log(crrYear);
    return(
        <section className="py-5 bg-black1 border-t-2 border-t-white/10">
            <div className="container">
                <div className="flex justify-between">
                    <Para className="text-white/75 font-semibold" text={`Copyright ${crrYear} - Uclean by Designesia`}></Para>
                <div className="flex gap-5">
                    <NavLink to={'/terms'} className="text-white/75 hover:text-white text-[17px] font-semibold capitalize trans">terms & conditions</NavLink>
                    <NavLink to={'/policy'} className="text-white/75 hover:text-white text-[17px] font-semibold capitalize trans">privacy policy</NavLink>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Copyright