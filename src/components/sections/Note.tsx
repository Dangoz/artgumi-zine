import React from 'react'

type NoteProps = {}

const Note = React.forwardRef<HTMLDivElement, NoteProps>((props, ref) => {
  return (
    <div ref={ref} className="w-screen h-[500px] bg-black text-black">
      Note
    </div>
  )
})

Note.displayName = 'Note'

export default Note
