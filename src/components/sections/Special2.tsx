import React, { useMemo, useEffect, useState, useRef, useCallback } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { artists } from '@/models/artists'
import type { Artist } from '@/models/artists'
import FrameDialog from '../artDisplay/FrameDialog'
import { motion, useTransform, useScroll } from 'framer-motion'
import Frame from '../artDisplay/Frame'

type SpecialProps = {
  introRef: React.RefObject<HTMLDivElement>
  noteRef: React.RefObject<HTMLDivElement>
}

const Special = React.forwardRef<HTMLDivElement, SpecialProps>(({ introRef, noteRef }, ref) => {
  const [shuffledArtists, setShuffledArtists] = useState<Artist[]>([])
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState<number>(0)
  const carouselWrapperRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  const { scrollY, scrollYProgress } = useScroll({
    target: carouselWrapperRef,
  })

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-95%'])

  const [scrollYValue, setScrollValue] = useState<number>(0)
  const [scrollYProgressValue, setScrollProgressValue] = useState<number>(0)
  const [transformProgressValue, setTransformProgressValue] = useState<string>()

  useEffect(() => {
    scrollY.on('change', (value) => setScrollValue(value))
    scrollYProgress.on('change', (value) => setScrollProgressValue(value))
    x.on('change', (value) => setTransformProgressValue(value))
  }, [scrollY, scrollYProgress, x])

  // shuffle artists
  useEffect(() => {
    const artistsCopy = [...artists]
    for (let i = artistsCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[artistsCopy[i], artistsCopy[j]] = [artistsCopy[j], artistsCopy[i]]
    }
    setShuffledArtists(artistsCopy)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Assuming each entry.target.id corresponds to artist.name
            const index = shuffledArtists.findIndex((artist) => artist.name === entry.target.id)
            console.log('intersecting', entry.target.id, index, shuffledArtists[index])
            setCurrentCarouselIndex(index)
          }
        })
      },
      {
        root: carouselRef.current, // Observe intersections within the carousel
        threshold: 1, // Configure the observer to trigger when 50% of an item is in view
      },
    )

    if (carouselRef.current) {
      const itemElements = carouselRef.current.querySelectorAll('.carousel-item')
      itemElements.forEach((element) => observer.observe(element))
    }

    // Cleanup observer on component unmount
    return () => observer.disconnect()
  }, [shuffledArtists])

  return (
    <div ref={ref} className={clsx('w-screen h-fit bg-slate-300 text-black', 'flex flex-col justify-center')}>
      <div className="fixed top-0 left-0 z-50 bg-white text-black">
        Y: {scrollYValue.toFixed(2)}
        <br />
        Progress%: {scrollYProgressValue.toFixed(2)}
        <br />
        Transform: {transformProgressValue}
      </div>

      <div className="bg-black w-screen h-[30vh] text-white">Before</div>

      <div ref={carouselWrapperRef} className="relative bg-pink-200 h-[300vh]">
        <div
          ref={carouselRef}
          className={clsx(
            'sticky top-0 h-screen overflow-hidden',
            'bg-slate-100 pt-10 pb-10 flex flex-nowrap items-center p-2 snap-x snap-mandatory',
          )}
        >
          <motion.div style={{ translateX: x }} className="flex gap-10">
            <div key={0} className="w-[1000px] h-[600px] bg-none animate-pulse shrink-0 blur-sm cursor-pointer" />

            {[...Array(artists.length)].map((_, index) => (
              <Frame key={index + 1} artist={shuffledArtists[index]} />
            ))}

            <div
              key={shuffledArtists.length + 1}
              className="w-[1000px] h-[600px] bg-none animate-pulse shrink-0 blur-sm"
            />
          </motion.div>
        </div>
      </div>

      <div className="bg-black w-screen h-[30vh] text-white">After</div>
    </div>
  )
})

Special.displayName = 'Special'

export default Special
