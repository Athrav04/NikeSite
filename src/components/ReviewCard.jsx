import { star } from "../assets/icons"

const ReviewCard = ({imgURL,name,feedback,rating})=>{
    return (
        <div className="flex-1 flex justify-center items-center flex-col shadow-xl px-4 py-4 rounded-[20px] ">
            <img 
            src={imgURL}
            alt="customer"
            className="rounded-full object-cover h-[120px] w-[120px]"
            />
            <h3 className="font-bold font-montserrat text-bold text-2xl mt-2">{name}</h3>
            <img 
            src={star}
            alt="rating"
            height={24}
            width={24}
            className="object-contain m-0 "
            />
            <p>({rating})</p>
            <p className="mt-6 text-center font-palanquin text-slate-gray info-text max-w-sm ">{feedback}</p>
        </div>
    )
}

export default ReviewCard