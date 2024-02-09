import React from 'react'
import Link from 'next/link'
export default function Nav() {
  return (
    <div>
        <nav className="flex justify-around w-screen items-center">
            <div className="text-black text-2xl">
                <Link href="/">Coder.Pro</Link>
            </div>
        </nav>
    </div>
  )
}
