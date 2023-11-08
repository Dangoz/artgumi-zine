import React from 'react'

type NoteProps = {}

const Note = React.forwardRef<HTMLDivElement, NoteProps>((props, ref) => {
  return (
    <div ref={ref} className="w-screen h-[700px] bg-violet-400 text-black flex flex-col justify-center items-center">
      Note
    </div>
  )
})

Note.displayName = 'Note'

export default Note
