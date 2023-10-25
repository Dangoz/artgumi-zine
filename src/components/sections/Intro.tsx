import React from 'react'
import Image from 'next/image'
import { scrollToSection } from '@/lib/util'

type IntroProps = {
  sections: React.RefObject<HTMLDivElement>[]
}

const Intro = ({ sections }: IntroProps) => {
  return (
    <div className="flex justify-center items-center w-screen h-60 gap-10">
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
}

export default Intro
