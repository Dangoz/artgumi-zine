import React, { useState } from 'react'
import Dialog from '@ui/Dialog'
import type { Artist } from '@/models/artists'
import { Twitter } from 'lucide-react'
import Image from 'next/image'
import FullScreenFrameDialog from './FullScreenFrameDialog'
import X from '@/components/ui/icons/X'

type FrameDialogProps = {
  artist: Artist
  open: boolean
  setOpen: (open: boolean) => void
}

const FrameDialog: React.FC<FrameDialogProps> = ({ artist, open, setOpen }) => {
  const [isImageFullscreen, setIsImageFullscreen] = useState(false)

  const handleImageClick = () => {
    setIsImageFullscreen(true)
  }

  const handleFullscreenClose = () => {
    setIsImageFullscreen(false)
  }

  return (
    <>
      <Dialog
        open={open}
        setOpen={setOpen}
        // blur={'md'}
        close={true}
      >
        <div className="flex w-screen h-screen items-start justify-center gap-4 pt-28">
          <div
            className="flex flex-col justify-center items-start gap-3 bg-slate-400/20 rounded-md p-2 backdrop-blur-md"
            onClick={handleImageClick}
          >
            {/* check if file is video or image/gif */}
            {!artist.artworkPath.includes('.mp4') ? (
              <Image alt={artist.name} src={artist.artworkPath} width={400} height={400} className="object-contain" />
            ) : (
              <video autoPlay muted src={artist.artworkPath} width={400} height={400} className="object-contain" />
            )}
          </div>
          <div className="flex flex-col justify-center items-start gap-3 bg-slate-400/20 rounded-md p-2 backdrop-blur-md w-[400px] h-[400px]">
            <div>
              <h2 className="text-2xl font-bold mb-2 text-red-300">{artist.name}</h2>
              <div className="text-white/80 mb-4 whitespace-pre-line">{artist.description}</div>
            </div>
            <div className="flex items-center gap-1">
              <X className="w-6 h-6 fill-black" />
              <a
                href={`https://twitter.com/${artist.x}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-blue-400 transition"
              >
                @{artist.x}
              </a>
            </div>
          </div>
        </div>
      </Dialog>
      {isImageFullscreen && (
        <FullScreenFrameDialog
          src={artist.artworkPath}
          alt={artist.name}
          open={isImageFullscreen}
          onClose={handleFullscreenClose}
        />
      )}
    </>
  )
}

export default FrameDialog
