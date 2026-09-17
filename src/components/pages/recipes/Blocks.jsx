import axios from "axios"
import { useEffect, useState } from "react"
import Img from "../../../ui/Img";
import Para from "../../../ui/Para";
import Btn from "../../../ui/Btn";
import Beef from '../../../assets/img/beeffilet.webp'

const RecipeBlocks = function(){
let [data, setData] = useState([]);

useEffect(function(){
    async function viewData(){
        let recipeApi = await axios.get(`${import.meta.env.VITE_recipeApi}/recipes`);
        setData(recipeApi.data.recipes);
        console.log(recipeApi.data.recipes);
        console.log(`${import.meta.env.VITE_name}`);
    }
    viewData();
}, []);

    return(
        <section className="my-20">
            <div className="container">
                <div className="flex justify-center items-center flex-wrap gap-10">
                {
                    data.map(function(recipe){
                    return(
                    <div key={recipe.id} className="group w-[25%] h-150 overflow-y-scroll scrollbar-none hover:bg-black/10 flex flex-col items-start gap-2.5 rounded-t-xl trans">
                    <Img src={recipe.image} alt='no pic' className='w-full object-cover rounded-t-xl'></Img>
                    <div className="group-hover:pb-6 group-hover:px-6 flex flex-col items-start gap-2.5 trans">
                    <h4 className="text-[18px] font-bold capitalize">{recipe.name}</h4>
                    <ul className="px-4 flex flex-col gap-2">
                    {
                    recipe.ingredients.map(function(i){
                        return(
                            <li className="list-disc font-semibold">{i}</li>
                        )
                    })
                    }
                    </ul>
                    <Para className="text-black1 text-[16px] font-semibold" text={recipe.instructions}></Para>
                    <Btn className='bg-blue1/45 hover:bg-blue1 text-black1 hover:text-white trans' text='read more'></Btn>
                    </div>
                    </div>
                    )
                    })
                }
                </div>
            </div>
        </section>
    )
}

export default RecipeBlocks