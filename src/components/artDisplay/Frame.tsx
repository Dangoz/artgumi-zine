import { useState } from 'react'
import type { Artist } from '@/models/artists'
import Image from 'next/image'
// import FrameDialog from './FrameDialog'
import Dialog from '@ui/Dialog'

type FrameProps = {
  artist?: Artist
}

const Frame: React.FC<FrameProps> = ({ artist }) => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false)

  if (!artist) return <div className="h-[600px] w-[1000px] bg-gray-300 animate-pulse shrink-0 blur-sm snap-center" />

  return (
    <div
      id={artist.name}
      className="flex flex-col justify-center items-center shrink-0 bg-blue-300 snap-center carousel-item cursor-pointer"
      onClick={() => setDialogOpen(true)}
    >
      {/* check if file is video or image/gif */}
      {!artist.artworkPath.includes('.mp4') ? (
        <Image
          alt={artist.name}
          src={artist.artworkPath}
          width={1000}
          height={600}
          className="h-[600px] w-[1000px] object-contain"
        />
      ) : (
        <video autoPlay muted loop src={artist.artworkPath} className="h-[600px] w-[1000px] object-contain" />
      )}
      {/* {<FrameDialog artist={artist} open={dialogOpen} setOpen={setDialogOpen} />} */}

      <Dialog open={dialogOpen} setOpen={setDialogOpen} blur={'md'} close={true}>
        <div className=" w-screen h-screen flex justify-center items-center bg-blue-300">123 321 {artist.name}</div>
      </Dialog>
    </div>
  )
}

export default Frame
