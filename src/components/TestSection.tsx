'use client'
import React from 'react'

type SectionProps = {}

const TestSection = React.forwardRef<HTMLDivElement, SectionProps>((props, ref) => {
  return (
    <div ref={ref} className={`w-screen h-screen bg-slate-500`}>
      222!!!
    </div>
  )
})

TestSection.displayName = 'TestSection'

export default TestSection
