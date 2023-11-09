import React from 'react'
import Image from 'next/image'
import { scrollToSection } from '@/lib/util'
import IntroBackground from '@/components/background/IntroBackground'
import clsx from 'clsx'

type IntroProps = {
  sections: React.RefObject<HTMLDivElement>[]
}

const Intro = React.forwardRef<HTMLDivElement, IntroProps>(({ sections }, ref) => {
  return (
    <div ref={ref} className="relative flex justify-center items-center w-screen h-screen">
      <IntroBackground />

      {/* intro content */}
      <div className="relative flex justify-center items-center bg-none-200 p-20 md:p-36 lg:p-48">
        <div
          className={clsx(
            'absolute z-10 top-0 left-0 bg-none-300/30',
            'w-28 h-28',
            'md:w-40 md:h-40',
            'lg:w-52 lg:h-52',
          )}
        >
          <Image
            alt="note"
            src="/assets/intro/note-icon.png"
            fill
            className={clsx('h-auto w-auto cursor-pointer object-contain', 'mt-0 ml-0')}
            sizes="100vw"
            onClick={() => scrollToSection(sections[0])}
          />
        </div>

        <div
          className={clsx(
            'absolute z-10 top-0 right-0 bg-none-300/30',
            'w-28 h-28',
            'md:w-40 md:h-40',
            'lg:w-52 lg:h-52',
          )}
        >
          <Image
            alt="special"
            src="/assets/intro/special-icon.png"
            fill
            className={clsx('h-auto w-auto cursor-pointer object-contain', 'mt-0 ml-0')}
            sizes="100vw"
            onClick={() => scrollToSection(sections[1])}
          />
        </div>

        {/* title */}
        <div className="relative p-2 flex justify-center items-center bg-none-300">
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

        <div
          className={clsx(
            'absolute z-10 bottom-0 left-0 bg-none-300/30',
            'w-28 h-28',
            'md:w-40 md:h-40',
            'lg:w-52 lg:h-52',
          )}
        >
          <Image
            alt="highlight"
            src="/assets/intro/highlight-icon.png"
            fill
            className={clsx('h-auto w-auto cursor-pointer object-contain', 'mt-0 ml-0')}
            sizes="100vw"
            onClick={() => scrollToSection(sections[2])}
          />
        </div>

        <div
          className={clsx(
            'absolute z-10 bottom-0 right-0 bg-none-300/30',
            'w-28 h-28',
            'md:w-40 md:h-40',
            'lg:w-52 lg:h-52',
          )}
        >
          <Image
            alt="credit"
            src="/assets/intro/credit-icon.png"
            fill
            className={clsx('h-auto w-auto cursor-pointer object-contain', 'mt-0 ml-0')}
            sizes="100vw"
            onClick={() => scrollToSection(sections[3])}
          />
        </div>
      </div>
    </div>
  )
})

Intro.displayName = 'Intro'

export default Intro
