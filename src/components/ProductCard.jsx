import { star } from "../assets/icons"
const ProductCard = ({imgURL,name,price,rating})=>{
    return (
        <div className="flex flex-col w-full max-sm:w-full">
            <img 
            src={imgURL}
            alt={name}
            height={280}
            width={280}
            />
            <div className="mt-8 flex justify-start gap-2.5 ">
                <img src={star} alt="rating" width={24} height={24}>
                </img>
                <p className=" font-montserrat text-xl leading-normal text-slate-gray">{rating}</p>
                </div>
            <h3 className="mt-2 leading-normal font-semibold font-palanquin">{name}</h3>
            <p className="mt-2 leading-normal text-lg font-montserrat font-bold text-coral-red">{price}</p>

        </div>
        
    )
}
export default ProductCard