import { NavLink } from "react-router-dom"
import Img from "../../ui/Img"
import navData from "../../dummy/navData"
import Btn from "../../ui/Btn"
import Logo from '../../assets/img/logo.png'
import { FaPhoneAlt } from "react-icons/fa";

const Nav = function () {

    return (
        <nav>
            <div className="container">
                <div className="py-7.5 flex justify-between items-center">
                    <div>
                        <Img src={Logo} alt='logo'></Img>
                    </div>
                    <ul className="flex gap-10">
                        {
                            navData.menuData.map(function (item, index) {
                                return (
                                    <li key={index} className="list-none">
                                        <NavLink to={item.url} className="text-black1/50 hover:text-black1 text-[17px] font-semibold capitalize transition-all ease-linear duration-300">
                                            {item.label}
                                        </NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="flex flex-col items-center gap-2.5">
                        <NavLink to={'/contact'} className="text-[12.5px] text-grey1 hover:text-blue-700 font-medium capitalize cursor-pointer trans">
                            need help?
                        </NavLink>
                        <div className="flex items-center gap-2">
                            <div className="text-blue1"><FaPhoneAlt /></div>
                        <h4 className="text-black1 text-[18px] font-semibold">
                            +1 5000 600
                            </h4>
                        </div>
                    </div>
                    <Btn className='bg-blue1/50 hover:bg-blue1 text-white/75 hover:text-white' text='book service now'></Btn>
                    {/* <NavLink to={'/dash'} className='bg-blue1/50 hover:bg-blue1 text-white/75 hover:text-white py-2 px-6.25 text-[18px] font-semibold border-0 rounded-[30px] capitalize cursor-pointer trans' >Dashboard</NavLink> */}
                </div>
            </div>
        </nav>
    )
}

export default Nav