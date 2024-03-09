import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "./Button"

const SpecialOffer = () =>{
    return (
        <section id="offers" className="flex justify-wrap gap-10 max-xl:flex-col-reverse items-center max-container">
            <div className="flex-1">
                <img src={offer} height={680} width={770} className="object-contain" />
            </div>
            <div className="flex flex-1 flex-col gap-4">
            <h2 className=" text-4xl font-bold font-palanquin capitalize lg:max-w-lg "><span className="text-coral-red">Special </span> Offer</h2>
            <p className="mt-5 text-slate-gray font-montserrat ">Unleash your style with our premium shoe collection now on sale! Step into savings and elevate every stride with our exclusive discounts. From sleek sneakers to elegant heels, find your perfect pair at unbeatable prices.Revamp your shoe closet with our must-have styles at discounted prices! Walk with confidence and style with our curated selection of shoes, now available at incredible discounts.<br></br>
            <br></br>Hurry, these offers won't last long! Upgrade your footwear game and step out in style without breaking the bank.</p><br></br>
            <div className="flex-1 flex">
            <Button name={'Shop Now'} iconURL={arrowRight}/>
            <button className="ml-3 px-4 py-4 text-lg flex justify-center items-center font-montserrat text-slate-gray border-slate-gray rounded-full border ">Learn More</button>
            </div> 
            </div>
            
        </section>
    )
}

export default SpecialOffer