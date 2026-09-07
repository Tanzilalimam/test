
const Btn = function({className, text}){

    return(
        <button className={`${className} py-2 px-6.25 text-[18px] font-semibold border-0 rounded-[30px] capitalize cursor-pointer transition-all ease-linear duration-300`}>{text}</button>
    )
}

export default Btn