import { truckFast,support,shieldTick } from "../assets/icons";
const ServiceCard = ({imgURL,label,subtext})=>{
    return (
        <div className="flex-1 flex-wrap w-ful sm:w-[350px] sm:min-w-[350px] shadow-xl rounded-[20px] px-10 py-16">
            <div className="flex justify-center items-start w-11 h-11 bg-coral-red rounded-full">
            <img className="py-2" src={imgURL} width={24} height={24} alt={label}>
            </img>
               </div>
               <p className="mt-5 font-palanquin font-bold text-3xl leading-normal">{label}</p>
               <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">{subtext}</p>

        </div>
    )
}
export default ServiceCard;