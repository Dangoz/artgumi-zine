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

      {/* intro content */}
      <div className="relative flex justify-center items-center bg-blue-200 p-[10vw]">
        <button className="absolute z-10 top-0 left-0" onClick={() => scrollToSection(sections[0])}>
          <Image
            alt="note"
            src="/assets/intro/note-icon.png"
            width={200}
            height={200}
            className="h-auto w-auto"
            sizes="100vw"
          />
        </button>

        <button className="absolute z-10 top-0 right-0" onClick={() => scrollToSection(sections[1])}>
          <Image
            alt="special"
            src="/assets/intro/special-icon.png"
            width={200}
            height={200}
            className="h-auto w-auto"
            sizes="100vw"
          />
        </button>

        {/* title */}
        <div className="relative p-2 flex justify-center items-center bg-red-300">
          <Image
            alt="logo"
            src="/assets/intro/title.png"
            width={500}
            height={500}
            priority
            sizes="100vw"
            className="w-auto h-auto"
          />
          <div className="absolute right-0 bottom-0 mb-2 sm:mb-3 md:mb-4 mr-4">
            <Image
              alt="label"
              src="/assets/intro/label.png"
              width={270}
              height={270}
              sizes="100vw"
              className="w-auto h-auto"
            />
          </div>
        </div>

        <button className="absolute bottom-0 left-0 z-10" onClick={() => scrollToSection(sections[2])}>
          <Image
            alt="highlight"
            src="/assets/intro/highlight-icon.png"
            width={200}
            height={200}
            className="h-auto w-auto"
            sizes="100vw"
          />
        </button>

        <button className="absolute bottom-0 right-0 z-10" onClick={() => scrollToSection(sections[3])}>
          <Image
            alt="credit"
            src="/assets/intro/credit-icon.png"
            width={200}
            height={200}
            className="h-auto w-auto"
            sizes="100vw"
          />
        </button>
      </div>
    </div>
  )
})

Intro.displayName = 'Intro'

export default Intro
