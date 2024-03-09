import Button from "./Button";
import { shoppigCart } from "../assets/icons";
import { shoe8 } from "../assets/images";

const SuperQuality = ()=>{
    return (
        <section id="about-us"
        className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
            <div className="flex flex-1 flex-col">
                <h2 className="text-4xl white font-bold lg:max-w-lg capitalize font-palanquin ">We provide
                <span className=" text-coral-red "> Premium <br></br>Quality </span>
                shoes
                </h2>
                <p className=" text-slate-gray font-montserrat mt-4 max-w-lg mb-14 leading-8 info-text">Discover elegance redefined with our premium shoe collection. Each pair is meticulously crafted with the finest materials, ensuring unparalleled comfort and style.
                 Elevate your every step with our exquisite designs, tailored to reflect sophistication and luxury.
                  <br/>
                  <br/>
                  Experience the embodiment of elegance and quality with our exclusive collection, where craftsmanship meets excellence.</p>
                  <div> <Button name={'Get now'} iconURL={shoppigCart} /></div>
               
            </div>
            <div className="flex-1 justify-center items-center ">
                <img 
                src={shoe8}
                alt="premium shoe"
                width={522}
                height={570}
                className="object-contain"
                >

                </img>
            </div>
        </section>
    )
}
export default SuperQuality;