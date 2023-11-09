import React from 'react'

type HighlightProps = {}

const Highlight = React.forwardRef<HTMLDivElement, HighlightProps>((props, ref) => {
  return (
    <div ref={ref} className="w-screen h-screen bg-green-300 text-black">
      Highlight
    </div>
  )
})

Highlight.displayName = 'Highlight'

export default Highlight
