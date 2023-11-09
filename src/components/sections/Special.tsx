import React, { useMemo, useEffect, useState, useRef, useCallback } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { artists } from '@/models/artists'
import type { Artist } from '@/models/artists'
import FrameDialog from '../artDisplay/FrameDialog'
import { motion, useScroll } from 'framer-motion'
import Frame from '../artDisplay/Frame'

type SpecialProps = {
  introRef: React.RefObject<HTMLDivElement>
  noteRef: React.RefObject<HTMLDivElement>
}

const Special = React.forwardRef<HTMLDivElement, SpecialProps>(({ introRef, noteRef }, ref) => {
  const [shuffledArtists, setShuffledArtists] = useState<Artist[]>([])
  const carouselWrapperRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  const { scrollY, scrollYProgress } = useScroll({
    target: carouselWrapperRef,
  })

  const [scrollYValue, setScrollValue] = useState<number>(0)
  const [scrollYProgressValue, setScrollProgressValue] = useState<number>(0)
  const [transformProgressValue, setTransformProgressValue] = useState<string>()

  useEffect(() => {
    scrollY.on('change', (value) => setScrollValue(value))
    scrollYProgress.on('change', (value) => setScrollProgressValue(value))
  }, [scrollY, scrollYProgress])

  // shuffle artists
  useEffect(() => {
    const artistsCopy = [...artists]
    for (let i = artistsCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[artistsCopy[i], artistsCopy[j]] = [artistsCopy[j], artistsCopy[i]]
    }
    setShuffledArtists(artistsCopy)
  }, [])

  // scroll carousel horizontally as scroll-Y-Progresses
  useEffect(() => {
    if (carouselRef.current) {
      const maxScrollLeft = carouselRef.current.scrollWidth - carouselRef.current.clientWidth
      const scrollLeft = maxScrollLeft * scrollYProgressValue
      carouselRef.current.scrollLeft = scrollLeft
    }
  }, [scrollYProgressValue])

  return (
    <div ref={ref} className={clsx('w-screen h-fit bg-slate-300 text-black', 'flex flex-col justify-center')}>
      {/* <div className="fixed top-0 left-0 z-50 bg-white text-black">
        Y: {scrollYValue.toFixed(2)}
        <br />
        Progress%: {scrollYProgressValue}
      </div> */}

      <div className="bg-black w-screen h-[30vh] text-white">Before</div>

      <div ref={carouselWrapperRef} className="relative bg-pink-200 h-[300vh]">
        <motion.div
          ref={carouselRef}
          className={clsx(
            'sticky top-0 h-screen overflow-hidden',
            // 'bg-slate-100 pt-10 pb-10 flex flex-nowrap items-center p-2 snap-x snap-mandatory',
            'bg-slate-100 pt-10 pb-10 flex flex-nowrap items-center p-2',
          )}
          style={{
            scrollBehavior: 'auto',
          }}
        >
          <div className="flex gap-2">
            <div key={0} className="h-[80vh] w-[25vw] bg-none animate-pulse shrink-0 blur-sm cursor-pointer" />

            {[...Array(artists.length)].map((_, index) => (
              <Frame
                key={shuffledArtists[index] ? shuffledArtists[index].name : index + 1}
                artist={shuffledArtists[index]}
              />
            ))}

            <div
              key={shuffledArtists.length + 1}
              className="h-[80vh] w-[25vw] bg-none animate-pulse shrink-0 blur-sm"
            />
          </div>
        </motion.div>
      </div>

      <div className="bg-black w-screen h-[30vh] text-white">After</div>
    </div>
  )
})

Special.displayName = 'Special'

export default Special
