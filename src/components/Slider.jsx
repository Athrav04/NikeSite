
import { navLinks } from '../../constants/index'
const Slider = ({display})=>{
    return (
        <>
        <div className={`absolute overflow:auto z-10 lg:hidden pt-40 min-h-screen shadow-lg right-0 z-2 w-64 ${display?'translate-x-0':' translate-x-full'} transition-transform ease-in-out`}>
      
        <ul className='flex-1 flex-wrap flex-col pl-5 flex justify-end items-flex-start gap-10 '>
                     {navLinks.map((link)=>(<li key={link.label}>
                        <a 
                        href={link.href}
                        className='font-montserrat leading-normal text-lg text-slate-gray'
                        >{link.label}</a>
                     </li>))}
                </ul>
        </div>
        </>
    )
}
  {/* <div className="fixed  sticky z-2 right-0 pr-20 pt-20 w-64 shadow-lg "> */}
export default Slider;