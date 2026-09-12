import axios from "axios"
import Img from "../../../ui/Img"
import Para from "../../../ui/Para"
import Btn from "../../../ui/Btn"
import Beef from '../../../assets/img/beeffilet.webp'
import { useEffect, useState } from "react"

const Cards = function(){
let [data, setData] = useState([]);

useEffect(function(){
    async function viewData(){
        let productApi = await axios.get('https://dummyjson.com/carts');
        setData(productApi.data.carts);
        console.log(productApi.data.carts);
    }
    viewData();
}, []);

    return(
        <section className="my-20">
            <div className="container">
                <div className="flex justify-center items-center">
                    <div className="flex justify-center items-start flex-wrap gap-5">
                        {
                            data.map(function(item){
                                return item.products.map(function(product){
                                return(
                        <div key={product.id} className="pb-6 px-6 w-[25%] hover:bg-black/20 rounded-t-xl flex flex-col items-start gap-2.5 trans">
                        <Img src={product.thumbnail} alt='not found' className='w-full object-cover rounded-t-xl'></Img>
                        <h4 className="text-[18px] font-bold capitalize">{product.title}</h4>
                        <Para className="text-black" text={product.price}></Para>
                        <Btn className='bg-blue1/45 hover:bg-blue1 text-black1 hover:text-white trans' text='learn more'></Btn>
                        </div>
                                    )
                                })
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cards