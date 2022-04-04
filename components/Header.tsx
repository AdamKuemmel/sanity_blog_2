import React from 'react'
import Link from 'next/link'
import logo from '../public/logoAK.png'
import Image from 'next/image'

function Header() {
  return (
    <header className="flex justify-between p-5 mx-auto max-w-7xl">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <div className="w-20">
            <Image
              className="object-contain cursor-pointer"
              src={logo}
              alt="logoAK"
            />
          </div>
        </Link>
        <div className="items-center hidden space-x-5 md:inline-flex">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="px-4 py-1 text-white bg-green-600 rounded-full">
            Follow
          </h3>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-green-600">
        <h3>Sign In</h3>
        <h3 className="px-4 border border-green-600 rounded-full">
          Get Stared
        </h3>
      </div>
    </header>
  )
}

export default Header
