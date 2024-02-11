import React from 'react'
import { Roboto } from 'next/font/google'
import Link from 'next/link'

import { useState } from 'react'
const roboto= Roboto({
  subsets:["latin"],
  weight:['100', '300', '400','500', '700','900']
})
export default function Nav() {
  const [isNavOpen, setIsNavOpen]= useState(false);
  function OpenNav(){
    console.log("hello")
    setIsNavOpen(!isNavOpen);
  }
  return (
    <nav className={` fixed top-0 dark:bg-black nav ${isNavOpen ? "active":""} border-b dark:border-gray-500 flex h-20  justify-around w-screen items-center px-3`}>
    <div className=" h-20 flex w-screen sm:border-b sm:border-gray-500 logo_ham sm:max-auto md:w-auto justify-around items-center">
    <div className="tracking-wider text-3xl font-extrabold">
         <Link href="/" className={`${roboto.className} logo transition-all `}>Coder.Pro</Link>
     </div>
     <div className="flex items-center justify-center gap-x-2">
     <div className={`${isNavOpen ? "active":""} mr-8 hamburger cursor-pointer md:hidden`} onClick={OpenNav}>
       <div className="line w-8 h-1.5 bg-black m-2 dark:bg-white rounded-md"></div>
       <div className="line w-8 h-1.5 bg-black m-2 dark:bg-white rounded-md"></div>
       <div className="line w-8 h-1.5 bg-black m-2 dark:bg-white rounded-md"></div>
     </div>
    </div>
     </div>
    <div className={` ${isNavOpen ? "active":""} links hidden md:flex`}>
     <ul className='flex items-center text-slate-500 font-bold justify-center gap-8 dark:text-white lg:text-xl'>
       <li className='hover:text-cyan-400'><Link href="/">Home</Link></li>
       <li className='hover:text-cyan-400'><Link href="/">Blog</Link></li>
       <li className='hover:text-cyan-400'><Link href="/">Learn</Link></li>
     </ul>
    </div>
 </nav>
  )
}
