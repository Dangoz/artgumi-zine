'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import TestSection from '@/components/TestSection'
import SideNav from '@/components/SideNav'

export default function Home() {
  const [num, setNum] = useState<number | undefined>()
  const section1Ref = useRef<HTMLDivElement>(null)
  const section2Ref = useRef<HTMLDivElement>(null)
  const section3Ref = useRef<HTMLDivElement>(null)
  const section4Ref = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="flex flex-col">
      <SideNav
        scrollToOne={() => scrollToSection(section1Ref)}
        scrollToTwo={() => scrollToSection(section2Ref)}
        scrollToThree={() => scrollToSection(section3Ref)}
        scrollToFour={() => scrollToSection(section4Ref)}
      />

      {/* Top section */}
      <div className="flex justify-center items-center w-screen h-60 gap-10">
        <button className="absolute mb-20 mr-40 animate-bounce" onClick={() => scrollToSection(section1Ref)}>
          Icon 1
        </button>
        <button className="absolute mb-40 ml-32" onClick={() => scrollToSection(section2Ref)}>
          Icon 2
        </button>
        <Image alt="logo" src="/artgumi-tiger.png" width={100} height={100} />
        <button className="absolute mt-20 mr-32" onClick={() => scrollToSection(section3Ref)}>
          Icon 3
        </button>
        <button className="absolute mt-40 ml-20" onClick={() => scrollToSection(section4Ref)}>
          Icon 4
        </button>
      </div>

      {/* section 1 */}
      <div ref={section1Ref} className="w-screen h-[500px] bg-white text-black">
        111-{num}
      </div>

      {/* section 2 */}
      <TestSection ref={section2Ref} />

      {/* section 3 */}
      <div ref={section3Ref} className="w-screen h-[600px] bg-slate-900">
        333
      </div>

      {/* section 4 */}
      <div ref={section4Ref} className="w-screen h-[900px] bg-slate-200">
        444
      </div>
    </div>
  )
}
