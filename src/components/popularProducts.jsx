import {ProductCard} from "../components/index";
import { products } from "../../constants";
const PopularProducts = () => {
    return (
       <section id="Products"
       className="max-container max-sm:mt-12 ">
        <div className="flex flex-col justify-start gap-5">
            <h2 className=" text-4xl font-palanquin font-bold">Our 
            <span className=" text-coral-red"> Best</span> Sellers
            </h2>
            <p className="text-slate-gary lg:max-w-lg mt-2 font-montserrat">Step into comfort and style with our best-selling shoes, designed to elevate every stride.</p>
        </div>
        <div className="mt-16 grid ls:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
            {products.map((product)=>{return(
                <ProductCard key={product.name} {...product}></ProductCard> )
                
            })}
        </div>
        
       </section>
    )
}
export default PopularProducts;