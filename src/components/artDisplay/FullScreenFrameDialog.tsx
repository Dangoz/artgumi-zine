import React from 'react'
import Image from 'next/image'

type FullScreenFrameDialogProps = {
  src: string
  alt: string
  open: boolean
  onClose: () => void
}

const FullScreenFrameDialog: React.FC<FullScreenFrameDialogProps> = ({ src, alt, open, onClose }) => {
  const dialogRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (open && dialogRef.current) {
      const element = dialogRef.current
      if (element.requestFullscreen) {
        element.requestFullscreen()
      }
      // else if (element.mozRequestFullScreen) {
      //   element.mozRequestFullScreen()
      // } else if (element.webkitRequestFullscreen) {
      //   element.webkitRequestFullscreen()
      // } else if (element.msRequestFullscreen) {
      //   element.msRequestFullscreen()
      // }
    }
  }, [open])

  return (
    <div ref={dialogRef} className="fixed inset-0 bg-black flex items-center justify-center" onClick={onClose}>
      {/* check if file is video or image/gif */}
      {!src.includes('.mp4') ? (
        <Image src={src} alt={alt} fill={true} className="max-w-full max-h-full object-contain" />
      ) : (
        <video src={src} autoPlay muted className="max-w-full max-h-full object-contain" />
      )}
    </div>
  )
}

export default FullScreenFrameDialog
