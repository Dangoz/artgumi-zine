import { useState } from 'react'
import type { Artist } from '@/models/artists'
import Image from 'next/image'
import FrameDialog from './FrameDialog'

type FrameProps = {
  artist?: Artist
}

const Frame: React.FC<FrameProps> = ({ artist }) => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false)

  if (!artist) return <div className="h-[600px] w-[1000px] bg-gray-300 animate-pulse shrink-0 blur-sm snap-center" />

  return (
    <div
      id={artist.name}
      className="flex h-[600px] w-[1000px] justify-center items-center shrink-0 bg-blue-300 snap-center carousel-item cursor-pointer"
    >
      {/* check if file is video or image/gif */}
      {!artist.artworkPath.includes('.mp4') ? (
        <Image
          alt={artist.name}
          src={artist.artworkPath}
          width={1000}
          height={600}
          className="h-[600px] w-[1000px] object-contain"
          onClick={() => setDialogOpen(true)}
        />
      ) : (
        <video
          autoPlay
          muted
          loop
          src={artist.artworkPath}
          className="h-[600px] w-[1000px] object-contain"
          onClick={() => setDialogOpen(true)}
        />
      )}
      {<FrameDialog artist={artist} open={dialogOpen} setOpen={setDialogOpen} />}
    </div>
  )
}

export default Frame
