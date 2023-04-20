import React from 'react'
import Image from "next/image";
import Link from 'next/link';

function Header() {
  return <header className='flex p-5 justify-between
  sticky top-0 bg-white z-50 shadow-md'>

    <div className='flex space-x-2 items-center'>
        <Image src='https://links.papareact.com/4t3'
        alt='logo'
        height={30}
        width={30}
        />
        <div>
            <h1> The TIES4911 <span className="text-violet-500"> Smart </span> Intelligence Generator </h1>
            <h2 className='text-xs'> Powered By DALL.E 2, Chat GPT, Microsoft Azure, GCP  </h2>
        </div>
    
    </div>

    { /** right */}
    <div className='flex text-xs md:text-base divide-x items-center text-gray-500'>
        <Link href={''}
        className="px-2 font-light text-right"
        >
            Explore the Cognitive intelligence
        </Link>
        <Link href={''}
        className="px-2 font-light text-right"
        >
           Github Repo
        </Link>
    </div>


  </header>;
}

export default Header