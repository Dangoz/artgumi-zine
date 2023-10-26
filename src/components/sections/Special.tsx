import React, { useMemo, useEffect, useState, useRef } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { artists } from '@/models/artists'
import type { Artist } from '@/models/artists'

type SpecialProps = {
  introRef: React.RefObject<HTMLDivElement>
  noteRef: React.RefObject<HTMLDivElement>
}

const Special = React.forwardRef<HTMLDivElement, SpecialProps>(({ introRef, noteRef }, ref) => {
  const [shuffledArtists, setShuffledArtists] = useState<Artist[]>([])
  const [carouselCenteredHeight, setCarouselCenteredHeight] = useState<number>(0)
  const [isCarouselActive, setIsCarouselActive] = useState<boolean>(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const artistsCopy = [...artists]
    for (let i = artistsCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[artistsCopy[i], artistsCopy[j]] = [artistsCopy[j], artistsCopy[i]]
    }
    setShuffledArtists(artistsCopy)
  }, [])

  useEffect(() => {
    if (!introRef.current || !noteRef.current || !carouselRef.current) return

    // get the height of intro & note components
    const introHeight = introRef.current.clientHeight
    const noteHeight = noteRef.current.clientHeight

    console.log(`intro height: ${introHeight}`)
    console.log(`note height: ${noteHeight}`)

    // get the median height of carousel
    const carouselHeight = carouselRef.current.clientHeight
    console.log(`carousel height: ${carouselHeight}`)

    // browser window height
    const windowHeight = window.innerHeight
    console.log(`window height: ${windowHeight}`)

    // offset that puts the carousel in the middle of the screen
    const offset = (1000 - windowHeight) / 2
    console.log(`offset: ${offset}`)

    const carouselCenteredHeight = introHeight + noteHeight + offset
    console.log(`carousel centered height: ${carouselCenteredHeight}`)
    setCarouselCenteredHeight(carouselCenteredHeight)

    // window.scrollTo({ top: carouselCenteredHeight, behavior: 'smooth' })
  }, [introRef, noteRef])

  useEffect(() => {
    if (carouselCenteredHeight === 0) return

    const handleScroll = (e: WheelEvent) => {
      console.log(`scrollYYY: ${window.scrollY}`)

      if (window.scrollY >= carouselCenteredHeight) {
        console.log('REACHEEED')
        e.preventDefault()
        // if (carouselRef.current) {
        //   // Scroll the carousel horizontally based on the vertical scroll delta
        //   carouselRef.current.scrollLeft += e.deltaY;
        // }
      }
    }

    window.addEventListener('wheel', handleScroll, { passive: false })

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('wheel', handleScroll)
  }, [carouselCenteredHeight, isCarouselActive])

  return (
    <div ref={ref} className={clsx('w-screen h-[1000px] bg-slate-300 text-black', 'flex items-center')}>
      {/* carousel */}
      <div ref={carouselRef} className="relative bg-slate-100 gap-2 pt-10 pb-10 flex flex-nowrap overflow-scroll p-2">
        {shuffledArtists.length
          ? shuffledArtists.map((artist) => (
              <div key={artist.name} className="flex flex-col justify-center items-center shrink-0 bg-red-0">
                <Image
                  key={artist.name}
                  alt={artist.name}
                  src={artist.artworkPath}
                  width={500}
                  height={500}
                  className="h-[500px] w-atuo object-contain"
                />
              </div>
            ))
          : [...Array(5)].map((_, i) => (
              <div key={i} className="w-[500px] h-[500px] bg-gray-300 animate-pulse shrink-0 blur-sm" />
            ))}
      </div>
    </div>
  )
})

Special.displayName = 'Special'

export default Special
