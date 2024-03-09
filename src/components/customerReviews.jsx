import { reviews } from "../../constants";
import {ReviewCard} from "../components/index"

const CustomerReviews = ()=>{
    return(
        <section className="flex-1">
            <h3 className="font-bold text-center capitalize text-4xl font-palanquin">What Our 
                <span className=" text-coral-red">  Customers </span>
                 Say About Us...</h3>
                 <p className="text-center max-w-lg font-montserrat text-slate-gray info-text m-auto mt-5">Walk in the shoes of our satisfied customers, where comfort meets style and every step tells a story of fashion-forward confidence!</p>
                 <div className="flex-1 flex mt-24 justify-evenly items-center max-lg:flex-col gap-14">
                    {reviews.map((review)=>(
                        <ReviewCard key={review.customerName} imgURL={review.imgURL} name={review.customerName} rating={review.rating} feedback={review.feedback} />
                    ))}
                 </div>
        </section>
    )
}

export default CustomerReviews;