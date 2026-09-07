
const Anchor = function({href="#", className="", content}){

    return(
        <a href={href} className={`${className} text-[17px] font-semibold no-underline capitalize transition-all ease-linear duration-300`}>{content}</a>
    )
}

export default Anchor