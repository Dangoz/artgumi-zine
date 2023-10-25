import React from 'react'

type SpecialProps = {}

const Special = React.forwardRef<HTMLDivElement, SpecialProps>((props, ref) => {
  return (
    <div ref={ref} className="w-screen h-[1000px] bg-slate-300 text-black">
      Special
    </div>
  )
})

Special.displayName = 'Special'

export default Special
