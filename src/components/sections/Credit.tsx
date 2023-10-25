import React from 'react'

type CreditProps = {}

const Credit = React.forwardRef<HTMLDivElement, CreditProps>((props, ref) => {
  return (
    <div ref={ref} className="w-screen h-[400px] bg-slate-400 text-black">
      Credit
    </div>
  )
})

Credit.displayName = 'Credit'

export default Credit
