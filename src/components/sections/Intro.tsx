import React from 'react'
import Image from 'next/image'
import { scrollToSection } from '@/lib/util'

type IntroProps = {
  sections: React.RefObject<HTMLDivElement>[]
}

const Intro = React.forwardRef<HTMLDivElement, IntroProps>(({ sections }, ref) => {
  return (
    <div
      ref={ref}
      className="flex justify-center items-center w-screen h-screen bg-[url('/assets/intro/intro-background.png')] bg-no-repeat bg-cover"
    >
      <button className="absolute mb-20 mr-40 animate-bounce" onClick={() => scrollToSection(sections[0])}>
        Icon 1
      </button>
      <button className="absolute mb-40 ml-32" onClick={() => scrollToSection(sections[1])}>
        Icon 2
      </button>
      <Image alt="logo" src="/artgumi-tiger.png" width={100} height={100} />
      <button className="absolute mt-20 mr-32" onClick={() => scrollToSection(sections[2])}>
        Icon 3
      </button>
      <button className="absolute mt-40 ml-20" onClick={() => scrollToSection(sections[3])}>
        Icon 4
      </button>
    </div>
  )
})

Intro.displayName = 'Intro'

export default Intro
