import Button from "./Button";

const Subscribe = () =>{
    return (
        <section className="flex justify-between max-lg:flex-col sm:gap-10 sm:items-center flex-1 itmes-center max-container">
            <h3 className="text-4xl font-palanquin font-bold leading-[68px] lg:max-w-lg">Sign Up for <span className="text-coral-red"> Updates</span></h3>
            <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border border-slate-gray rounded-full">
            <input  type="text" placeholder="Subscribe@Nike.com" className="input"/>
            <div className="flex max-sm:justify-end items-center max-sm:w-full">
            <Button  name={"Sign Up"}/>
            </div>
            </div>
        </section>
    )
}

export default Subscribe;