import {headerLogo} from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../../constants'
import { useState } from 'react'



const Navbar = ({clicked})=>{
    return(
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className='flex items-center justify-between max-container'>
                <a href="/">
                    <img 
                    src={headerLogo}
                    alt="Logo"
                    width={130}
                    height={29}></img>
                </a>
                <ul className='flex-1 flex justify-end items-center gap-16 max-lg:hidden'>

                     {navLinks.map((link)=>(<li key={link.label}>
                        <a 
                        href={link.href}
                        className='font-montserrat leading-normal text-lg text-slate-gray'
                        >{link.label}</a>
                     </li>))}
                </ul>
                <div className='hidden max-lg:block' >

                    <button onClick={clicked} className=' shadow-md'>
                    <img src={hamburger}
                    alt='Nav-Button'
                    width={25}
                    height={25}></img>
                    </button>
                </div>
            </nav>
        </header>
    )
}
export default Navbar;