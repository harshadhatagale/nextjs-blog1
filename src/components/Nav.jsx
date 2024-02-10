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
    <div>
        <nav className={` dark:bg-gray-500 nav ${isNavOpen ? "active":""}  flex h-20 shadow-lg justify-around w-screen items-center`}>
           <div className="flex w-screen logo_ham md:w-auto justify-around items-center">
           <div className="tracking-wider text-3xl font-extrabold text-amber-400 dark:text-blue-300">
                <Link href="/" className={roboto.className}>Coder.Pro</Link>
            </div>
            <div className="fle w-8 border-2 border-black-900 rounded-md border-5 h-6">
              <div className=""></div>
            </div>
            <div className={`${isNavOpen ? "active":""} hamburger cursor-pointer  :hidden`} onClick={OpenNav}>
              <div className="line w-8 h-1.5 bg-black m-2 rounded-md"></div>
              <div className="line w-8 h-1.5 bg-black m-2 rounded-md"></div>
              <div className="line w-8 h-1.5 bg-black m-2 rounded-md"></div>
            </div>
           </div>
           <div className={` ${isNavOpen ? "active":""} links hidden md:flex`}>
            <ul className='flex items-center text-slate-500 font-bold justify-center gap-4 dark:text-white'>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/">Blog</Link></li>
              <li><Link href="/">Learn</Link></li>
            </ul>
           </div>
        </nav>
    </div>
  )
}
