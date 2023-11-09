import React from 'react'
import Image from 'next/image'
import { scrollToSection } from '@/lib/util'
import IntroBackground from '@/components/background/IntroBackground'

type IntroProps = {
  sections: React.RefObject<HTMLDivElement>[]
}

const Intro = React.forwardRef<HTMLDivElement, IntroProps>(({ sections }, ref) => {
  return (
    <div ref={ref} className="relative flex justify-center items-center w-screen h-screen">
      <IntroBackground />

      <button className="absolute mb-[250px] mr-[500px] z-20" onClick={() => scrollToSection(sections[0])}>
        <Image alt="note" src="/assets/intro/note-icon.png" width={350} height={350} className="h-auto w-auto" />
      </button>
      <button className="absolute mb-[300px] ml-[550px] z-20" onClick={() => scrollToSection(sections[1])}>
        <Image alt="special" src="/assets/intro/special-icon.png" width={250} height={250} className="h-auto w-auto" />
      </button>
      {/* <Image alt="logo" src="/artgumi-tiger.png" width={100} height={100} /> */}

      {/* title */}
      <div className="relative p-2 hover:animate-pulse z-10">
        <Image alt="logo" src="/assets/intro/title.png" width={500} height={500} priority className="h-auto w-auto" />
        <Image
          alt="label"
          src="/assets/intro/label.png"
          width={270}
          height={270}
          className="absolute right-0 bottom-0 mr-[40px] w-auto h-auto"
        />
      </div>

      <button className="absolute mt-[400px] mr-[570px] z-20" onClick={() => scrollToSection(sections[2])}>
        <Image
          alt="highlight"
          src="/assets/intro/highlight-icon.png"
          width={200}
          height={200}
          className="h-auto w-auto"
        />
      </button>
      <button className="absolute mt-[250px] ml-[530px] z-20" onClick={() => scrollToSection(sections[3])}>
        <Image alt="credit" src="/assets/intro/credit-icon.png" width={220} height={220} className="h-auto w-auto" />
      </button>
    </div>
  )
})

Intro.displayName = 'Intro'

export default Intro
