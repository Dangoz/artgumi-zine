'use client'

import { useRef } from 'react'
import SideNav from '@/components/navigation/SideNav'
import Intro from '@/components/sections/Intro'
import Note from '@/components/sections/Note'
import Special from '@/components/sections/Special'
import Highlight from '@/components/sections/Highlight'
import Credit from '@/components/sections/Credit'

export default function Home() {
  const noteRef = useRef<HTMLDivElement>(null)
  const specialRef = useRef<HTMLDivElement>(null)
  const highlightRef = useRef<HTMLDivElement>(null)
  const creditRef = useRef<HTMLDivElement>(null)

  return (
    <div className="flex flex-col">
      {/* side navigatin */}
      <SideNav sections={[noteRef, specialRef, highlightRef, creditRef]} />

      <Intro sections={[noteRef, specialRef, highlightRef, creditRef]} />

      <Note ref={noteRef} />
      <Special ref={specialRef} />
      <Highlight ref={highlightRef} />
      <Credit ref={creditRef} />
    </div>
  )
}
