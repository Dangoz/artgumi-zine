'use client'

import { useState, useRef } from 'react'
import TestSection from '@/components/TestSection'

export default function Home() {
  const [num, setNum] = useState<number | undefined>()
  const section1Ref = useRef<HTMLDivElement>(null)
  const section2Ref = useRef<HTMLDivElement>(null)
  const section3Ref = useRef<HTMLDivElement>(null)

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
      <div className="top-10 left-10 flex space-x-4">
        <button onClick={() => scrollToSection(section1Ref)}>Icon 1</button>
        <button onClick={() => scrollToSection(section2Ref)}>Icon 2</button>
        <button onClick={() => scrollToSection(section3Ref)}>Icon 3</button>
      </div>

      {/* section 1 */}
      <div ref={section1Ref} className="w-screen h-[500px] bg-white text-black">
        111-{num}
      </div>

      {/* section 2 */}
      {/* <div ref={section2Ref} className='w-screen h-[800px] bg-slate-500'>
        222
      </div> */}
      <TestSection ref={section2Ref} />

      {/* section 3 */}
      <div ref={section3Ref} className="w-screen h-[600px] bg-slate-900">
        333
      </div>
    </div>
  )
}
