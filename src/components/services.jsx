import { services } from "../../constants/index";
import {ServiceCard} from '../components/index'
const Services = () =>{
    return (
        <section className="flex justify-center flex-wrap max-container gap-9">
            {services.map((service)=>(
               <ServiceCard key={service.label} imgURL={service.imgURL} label={service.label} subtext={service.subtext}/>
            ))}
        </section>
    )
}

export default Services;