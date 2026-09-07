import { NavLink } from "react-router-dom"
import Img from "../../../ui/Img"
import Para from "../../../ui/Para"
import Btn from "../../../ui/Btn"
import Bannerimg from '../../../assets/img/banner.png'

const Banner = function(){

    return(
        <section className="">
            <div className="container">
                <div className="flex flex-col items-center gap-12">
                    <div className="flex flex-col items-center gap-8">
                        <h1 className="text-6xl font-bold capitalize">sparkling spaces</h1>
                        <Para className="w-125.5 text-center" text='Enjoy a spotless space with our expert cleaning team. Affordable, eco-friendly, and tailored to your needs!'></Para>
                        <Btn className='bg-blue1/50 hover:bg-blue1 text-white/75 hover:text-white' text='book cleaning service'></Btn>
                        <NavLink to={'/dash'} className='bg-blue1/50 hover:bg-blue1 text-white/75 hover:text-white py-2 px-6.25 text-[18px] font-semibold border-0 rounded-[30px] capitalize cursor-pointer trans' >Dashboard</NavLink>
                    </div>
                    <div>
                        <Img src={Bannerimg} alt='banner'></Img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner