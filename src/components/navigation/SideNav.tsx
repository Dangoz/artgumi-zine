'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { Sparkles, Flower, ScrollText, Cat } from 'lucide-react'
import { scrollToSection } from '@/lib/util'

type SideNavProps = {
  sections: React.RefObject<HTMLDivElement>[]
}

const SideNav = ({ sections }: SideNavProps) => {
  const [activeSection, setActiveSection] = useState<number | null>(null)

  useEffect(() => {
    // check if all sections have been referenced
    const nullSections = sections.filter((section) => section.current === null)
    if (nullSections.length > 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.findIndex((section) => section.current === entry.target)
            setActiveSection(index)
          }
        })
      },
      {
        threshold: 0.2, // TODO: refactor to use farmer motion useInView, observe each section with different thresholds
      },
    )

    // Start observing each element/component
    sections.forEach((section) => {
      if (section.current) observer.observe(section.current)
    })

    // Cleanup observer on component unmount
    return () => observer.disconnect()
  }, [sections])

  return (
    // fixed side nav for transitioning between sections
    <div
      className={clsx(
        'fixed z-50 bg-gray-300',
        'w-screen md:w-0 md:ml-4 md:h-screen bottom-6',
        'flex justify-center items-center',
      )}
    >
      <div
        className={clsx(
          'fixed pr-1 pl-1 md:pr-0 md:pl-0 md:pt-1 md:pb-1',
          'border-black/50 border-[1px]',
          'flex flex-row md:flex-col justify-evenly items-center gap-1.5 bg-black/60',
          'backdrop-blur-sm backdrop-filter rounded-2xl',
        )}
      >
        <ScrollText
          className={clsx(
            'w-6 h-6 p-1 cursor-pointer rounded-full',
            activeSection === 0 ? 'text-white/100' : 'text-white/50',
          )}
          onClick={() => scrollToSection(sections[0])}
        />
        <Flower
          className={clsx(
            'w-6 h-6 p-1 cursor-pointer rounded-full',
            activeSection === 1 ? 'text-white/100' : 'text-white/50',
          )}
          onClick={() => scrollToSection(sections[1])}
        />
        <Sparkles
          className={clsx(
            'w-6 h-6 p-1 cursor-pointer rounded-full',
            activeSection === 2 ? 'text-white/100' : 'text-white/50',
          )}
          onClick={() => scrollToSection(sections[2])}
        />
        <Cat
          className={clsx(
            'w-6 h-6 p-1 cursor-pointer rounded-full',
            activeSection === 3 ? 'text-white/100' : 'text-white/50',
          )}
          onClick={() => scrollToSection(sections[3])}
        />
      </div>
    </div>
  )
}

export default SideNav
