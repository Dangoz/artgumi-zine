import React from 'react'
import clsx from 'clsx'
import { Component1Icon, Component2Icon, SunIcon, MoonIcon } from '@radix-ui/react-icons'

type SideNavProps = {
  scrollToOne: () => void
  scrollToTwo: () => void
  scrollToThree: () => void
  scrollToFour: () => void
}

const SideNav = ({ scrollToOne, scrollToTwo, scrollToThree, scrollToFour }: SideNavProps) => {
  return (
    // a fixed vertical side nav on the left middle of the browser window
    <div
      className={clsx(
        'fixed left-0 top-1/2 ml-4 rounded-xl w-10 h-32',
        'border-gray-600 bg-pink-50 border-2',
        'flex flex-col justify-evenly items-center gap-1',
      )}
    >
      <Component1Icon className="w-4 h-4 text-black cursor-pointer" onClick={scrollToOne} />
      <Component2Icon className="w-4 h-4 text-black cursor-pointer" onClick={scrollToTwo} />
      <SunIcon className="w-4 h-4 text-black cursor-pointer" onClick={scrollToThree} />
      <MoonIcon className="w-4 h-4 text-black cursor-pointer" onClick={scrollToFour} />
    </div>
  )
}

export default SideNav
