import { useState, useRef, useEffect } from 'react'
import type { Artist } from '@/models/artists'
import Image from 'next/image'
import FrameDialog from './FrameDialog'
import { useInView, motion, AnimationControls, TargetAndTransition, VariantLabels } from 'framer-motion'
import clsx from 'clsx'

type FrameProps = {
  artist?: Artist
}

const Frame: React.FC<FrameProps> = ({ artist }) => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false)
  const frameRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(frameRef, { amount: 1 })

  const variants: {
    inView: AnimationControls | TargetAndTransition | VariantLabels
    notInView: AnimationControls | TargetAndTransition | VariantLabels
  } = {
    inView: {
      scale: 1,
    },
    notInView: {
      scale: 0.9,
      filter: 'blur(12px) grayscale(90%)',
    },
  }

  if (!artist) return <div className="h-[600px] w-[1000px] bg-gray-300 animate-pulse shrink-0 blur-sm snap-center" />

  return (
    <div
      ref={frameRef}
      id={artist.name}
      className={clsx('h-[80vh] w-fit min-w-[50vw] flex justify-center items-center shrink-0 snap-center')}
    >
      {!artist.artworkPath.includes('.mp4') ? (
        <motion.div animate={isInView ? variants.inView : variants.notInView} transition={{ duration: 0.5 }}>
          <Image
            alt={artist.name}
            src={artist.artworkPath}
            width={1000}
            height={600}
            className="h-auto max-h-[80vh] w-auto max-w-[80vw] rounded cursor-pointer"
            onClick={() => setDialogOpen(true)}
          />
          <figcaption className="text-black text-start mt-1">{artist.title}</figcaption>
        </motion.div>
      ) : (
        <motion.div animate={isInView ? variants.inView : variants.notInView} transition={{ duration: 0.5 }}>
          <video
            autoPlay
            muted
            loop
            src={artist.artworkPath}
            className="h-auto max-h-[80vh] w-auto max-w-[80vw] rounded cursor-pointer"
            onClick={() => setDialogOpen(true)}
          />
          <figcaption className="text-black">{artist.title}</figcaption>
        </motion.div>
      )}
      {<FrameDialog artist={artist} open={dialogOpen} setOpen={setDialogOpen} />}
    </div>
  )
}

export default Frame
