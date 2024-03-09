const Button = ({name,iconURL})=>{
    return(
        <button className="flex font-montserrat text-lg bg-coral-red border rounded-full gap-2 px-4 py-4 justify-center items-center">
            {name}
            {iconURL && <img
            src={iconURL}
            alt='button icon'
            className="ml-2 object-contain rounded-full w-5 h-5"
            ></img> }
            

        </button>
    )
}
export default Button