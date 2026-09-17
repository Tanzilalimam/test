import { useState } from "react";

const Form = function(){
let[formData, setFormData] = useState([]);

let inputInfo = function(e){
    console.log(e.target.value);
    setFormData(e.target.value);
}

    return(
        <section className="my-10">
            <div className="container">
                <div className="[w-40%] flex flex-col items-start gap-2">
                    <div className="flex items-center gap-2.5">
                        <label className="text-lg font-semibold uppercase">text:</label>
                        <input type="text" placeholder="enter text" className="py-2 px-4 text-lg font-medium border-2 border-black rounded-md outline-0" onChange={inputInfo} />
                    </div>
                    <div>display: {formData}</div>
                </div>
            </div>
        </section>
    )
}

export default Form