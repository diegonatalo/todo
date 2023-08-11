'use client'

import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export const Header = () => {
  const pathname = usePathname()

  return (
    !/sign-up|sign-in/.test(pathname) && (
      <div className="w-full bg-zinc-200 dark:bg-black">
        <div className="container items-center justify-center">
          <Image
            className="mb-20 ml-auto mt-[4.5rem]"
            src="./images/logo.svg"
            width={126}
            height={48}
            alt="Logo"
          />

          <div className="ml-auto">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </div>
    )
  )
}
