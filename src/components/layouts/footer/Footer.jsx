import Img from "../../../ui/Img"
import Para from "../../../ui/Para"
import icons from "../../../dummy/icons"
import Logo from '../../../assets/img/logo2.png'
import { NavLink } from "react-router-dom"
import navData from "../../../dummy/navData"
import { FaRegClock } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaRegEnvelope } from "react-icons/fa";

const Footer = function () {

    return (
        <section className="py-25 w-full bg-black1">
            <div className="container">
                <div className="flex justify-between items-start">
                    <div className="flex flex-col items-start gap-7.5">
                        <Img src={Logo} alt='logo'></Img>
                        <Para className="w-93.75" text='We are a team of passionate cleaning experts who take pride in delivering the highest standard of service. With years of experience in the industry, we’ve perfected our cleaning methods to ensure every job is done right.'>
                        </Para>
                        <div className="flex items-center gap-5">
                        {
                            icons.social.map(function(item, index){
                                let Icn = item.icon;
                                return(
                                    <NavLink key={index} to={item.url}>
                                        <Icn className="text-white/75 hover:text-white text-2xl trans"/>
                                    </NavLink>
                                )
                            })
                        }
                        </div>
                    </div>
                    <ul className="flex flex-col gap-3">
                        <h4 className='text-white text-[20px] font-bold capitalize'>our company</h4>
                        {
                            navData.footerData.map(function(item, index){
                                return(
                                <li key={index} className="list-none">
                                    <NavLink to={item.url} className='text-white/75 hover:text-white text-[17px] font-semibold capitalize transition-all ease-linear duration-300'>
                                        {item.label}
                                    </NavLink>
                                </li>
                                )
                            })
                        }
                    </ul>
                    <ul className="flex flex-col gap-3">
                        <h4 className='text-white text-[20px] font-bold capitalize'>our services</h4>
                        {
                            navData.footerService.map(function(item, index){
                                return(
                                <li key={index} className="list-none">
                                    <NavLink to={item.url} className='text-white/75 hover:text-white text-[17px] font-semibold capitalize transition-all ease-linear duration-300'>
                                        {item.label}
                                    </NavLink>
                                </li>
                                )
                            })
                        }
                    </ul>
                    <div className="flex flex-col items-start gap-6">
                        <div className="flex flex-col items-start gap-2">
                        <div className="flex items-center gap-3">
                        <div className="text-golden1"><FaRegClock /></div>
                        <h5 className="text-white text-[18px] font-bold capitalize">we're open</h5>
                        </div>
                        <Para className="text-white/75" text='Monday - Saturday 08.00 - 18.00'></Para>
                        </div>
                        <div className="flex flex-col items-start gap-2">
                        <div className="flex items-center gap-3">
                        <div className="text-golden1"><CiLocationOn /></div>
                        <h5 className="text-white text-[18px] font-bold capitalize">office location</h5>
                        </div>
                        <Para className="text-white/75" text='100 S Main St, New York, NY'></Para>
                        </div>
                        <div className="flex flex-col items-start gap-2">
                        <div className="flex items-center gap-3">
                        <div className="text-golden1"><FaRegEnvelope /></div>
                        <h5 className="text-white text-[18px] font-bold capitalize">send a message</h5>
                        </div>
                        <Para className="text-white/75" text='contact@uclean.com'></Para>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer