"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function Header() {
    const path = usePathname();
    useEffect(() => {
        console.log(path)
    })

    return (
        <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
            <Image src="https://doplac.fra1.cdn.digitaloceanspaces.com/doplac-media/2434/media/21oHRkpupFE2ptTwjrSu1729803959.png" alt="logo" width={100} height={100} />
            <ul className='hidden md:flex gap-6'>
                <li className='hover:text-primary hover:font-bold transition-all cursor-pointer'>Dashboard</li>
                <li className='hover:text-primary hover:font-bold transition-all cursor-pointer'>Questions</li>
                <li className='hover:text-primary hover:font-bold transition-all cursor-pointer'>How it works</li>
                <li className='hover:text-primary hover:font-bold transition-all cursor-pointer'>Upgrade</li>
            </ul>
            <UserButton />
        </div>
    )
}

export default Header