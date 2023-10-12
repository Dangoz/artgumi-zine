'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import TestSection from '@/components/TestSection'

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
      {/* Top section */}
      <div className="flex justify-center items-center w-screen h-60 gap-10">
        <button onClick={() => scrollToSection(section1Ref)}>Icon 1</button>
        <button onClick={() => scrollToSection(section2Ref)}>Icon 2</button>
        <Image alt="logo" src="/artgumi-tiger.png" width={100} height={100} />
        <button onClick={() => scrollToSection(section3Ref)}>Icon 3</button>
        <button onClick={() => scrollToSection(section4Ref)}>Icon 4</button>
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
