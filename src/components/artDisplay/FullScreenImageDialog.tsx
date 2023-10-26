import React from 'react'

type FullscreenImageDialogProps = {
  src: string
  alt: string
  open: boolean
  onClose: () => void
}

const FullscreenImageDialog: React.FC<FullscreenImageDialogProps> = ({ src, alt, open, onClose }) => {
  const dialogRef = React.useRef(null)

  React.useEffect(() => {
    if (open && dialogRef.current) {
      const element = dialogRef.current
      if (element.requestFullscreen) {
        element.requestFullscreen()
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen()
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen()
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen()
      }
    }
  }, [open])

  return (
    <div ref={dialogRef} className="fixed inset-0 bg-black flex items-center justify-center" onClick={onClose}>
      <img src={src} alt={alt} className="max-w-full max-h-full object-contain" />
    </div>
  )
}

export default FullscreenImageDialog
