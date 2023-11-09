import React from 'react'
import Image from 'next/image'
import { scrollToSection } from '@/lib/util'
import IntroBackground from '@/components/background/IntroBackground'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { bounceTopLeft, bounceTopRight, bounceBottomLeft, bounceBottomRight } from '@/lib/animation/introBounce'

type IntroProps = {
  sections: React.RefObject<HTMLDivElement>[]
}

const Intro = React.forwardRef<HTMLDivElement, IntroProps>(({ sections }, ref) => {
  return (
    <div ref={ref} className="relative flex justify-center items-center w-screen h-screen">
      <IntroBackground />

      {/* intro content */}
      <div className="relative flex justify-center items-center bg-none-200 p-20 md:p-36 lg:p-48">
        <motion.div
          className={clsx(
            'absolute z-10 top-0 left-0 bg-none-300/30',
            'w-32 h-32 mt-8 ml-6',
            'md:w-44 md:h-44 md:mt-20 md:ml-16',
            'lg:w-60 lg:h-60 lg:mt-28 lg:ml-16',
          )}
          animate={bounceTopLeft}
        >
          <Image
            alt="note"
            src="/assets/intro/note-icon.png"
            fill
            className={clsx('h-auto w-auto cursor-pointer object-contain')}
            sizes="100vw"
            onClick={() => scrollToSection(sections[0])}
          />
        </motion.div>

        <motion.div
          className={clsx(
            'absolute z-10 top-0 right-0 bg-none-300/30',
            'w-28 h-28 mt-8 mr-4',
            'md:w-40 md:h-40 md:mt-20 md:mr-12',
            'lg:w-64 lg:h-64 lg:mt-24 lg:mr-12',
          )}
          animate={bounceTopRight}
        >
          <Image
            alt="special"
            src="/assets/intro/special-icon.png"
            fill
            className={clsx('h-auto w-auto cursor-pointer object-contain')}
            onClick={() => scrollToSection(sections[1])}
          />
        </motion.div>

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

        <motion.div
          className={clsx(
            'absolute z-10 bottom-0 left-0 bg-none-300/30',
            'w-24 h-24 mb-3 ml-4',
            'md:w-32 md:h-32 md:mb-12 md:ml-16',
            'lg:w-48 lg:h-48 lg:mb-12 lg:ml-16',
          )}
          animate={bounceBottomLeft}
        >
          <Image
            alt="highlight"
            src="/assets/intro/highlight-icon.png"
            fill
            className={clsx('h-auto w-auto cursor-pointer object-contain')}
            sizes="100vw"
            onClick={() => scrollToSection(sections[2])}
          />
        </motion.div>

        <motion.div
          className={clsx(
            'absolute z-10 bottom-0 right-0 bg-none-300/30',
            'w-28 h-28 mb-4 mr-5',
            'md:w-36 md:h-36 md:mb-16 md:mr-16',
            'lg:w-52 lg:h-52 lg:mb-20 lg:mr-20',
          )}
          animate={bounceBottomRight}
        >
          <Image
            alt="credit"
            src="/assets/intro/credit-icon.png"
            fill
            className={clsx('h-auto w-auto cursor-pointer object-contain')}
            sizes="100vw"
            onClick={() => scrollToSection(sections[3])}
          />
        </motion.div>
      </div>
    </div>
  )
})

Intro.displayName = 'Intro'

export default Intro
