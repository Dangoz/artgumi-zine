import React from 'react'
import Dialog from '@ui/Dialog'
import type { Artist } from '@/models/artists'

type FrameDialogProps = {
  artist: Artist
  open: boolean
  setOpen: (open: boolean) => void
}

const FrameDialog: React.FC<FrameDialogProps> = ({ artist, open, setOpen }) => {
  return (
    <>
      <Dialog open={open} setOpen={setOpen} blur={'md'} close={true}>
        <div className="flex flex-col justify-center items-start gap-3 bg-slate-400/20 rounded-md p-6 backdrop-blur-md">
          {artist.name}
        </div>
      </Dialog>
    </>
  )
}

export default FrameDialog
