import axios from "axios"
import Img from "../../../ui/Img"
import Para from "../../../ui/Para"
import Btn from "../../../ui/Btn"
import Beef from '../../../assets/img/beeffilet.webp'
import { useEffect, useState } from "react"

const UserList = function(){
let [data, setData] = useState([]);

useEffect(function(){
    async function viewData(){
        let userApi = await axios.get(`${import.meta.env.VITE_userApi}/users`);
        setData(userApi.data.users);
        console.log(userApi.data.users);
    }
    viewData();
},[])

    return(
        <section className="my-15">
            <div className="container">
                <div className="flex justify-center items-start flex-wrap gap-5">
                {
                data.map(function(user){
                    return(
                    <div key={user.id} className="w-[30%] flex flex-col items-start gap-3 rounded-t-xl">
                        <Img src={user.image} alt='no pic' className='w-full object-cover rounded-t-xl'></Img>
                        <div className="px-4 flex flex-col items-start gap-3">
                            <h4 className="text-xl font-bold capitalize">{user.firstName}</h4>
                            <Para className="text-lg font-medium" text={user.hair.type}></Para>
                            <Btn className='bg-blue1/30 hover:bg-blue1 hover:text-white' text='more details'></Btn>
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

export default UserList