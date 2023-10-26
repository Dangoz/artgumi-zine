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
            console.log(`current index: ${index}`)
            console.log(entry.target)
            setActiveSection(index)
          }
        })
      },
      {
        threshold: 0.5, // Configure observer to trigger when 50% of element is in view
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
        'fixed left-1 top-1/2 rounded-2xl pt-1 pb-1 backdrop-blur-sm backdrop-filter',
        'border-black/50 border-[1px] z-50',
        'flex flex-col justify-evenly items-center gap-1.5 bg-black/60',
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
  )
}

export default SideNav
