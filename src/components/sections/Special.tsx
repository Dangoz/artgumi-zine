import React, { useMemo, useEffect, useState, useRef, useCallback } from 'react'
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
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState<number>(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const artistsCopy = [...artists]
    for (let i = artistsCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[artistsCopy[i], artistsCopy[j]] = [artistsCopy[j], artistsCopy[i]]
    }
    setShuffledArtists(artistsCopy)
  }, [])

  // calculate the centered height of the carousel
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

  // when user scrolls to center of carousel, disable default scroll behavior and activate carousel scroll
  useEffect(() => {
    if (carouselCenteredHeight === 0) return

    const handleScroll = (event: WheelEvent) => {
      if (window.scrollY >= carouselCenteredHeight) {
        // console.log('REACHEEED', window.scrollY, window.scrollX)

        // disable default scroll behavior
        document.body.style.overflow = 'hidden'

        // check and activate carousel state
        if (!isCarouselActive) {
          setIsCarouselActive(true)

          // stick window to the center of the carousel
          window.scrollTo({ top: carouselCenteredHeight, behavior: 'instant' })
        }

        // console.log('delta', event.deltaX, event.deltaY)
      }
    }

    window.addEventListener('wheel', handleScroll, { passive: false })

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('wheel', handleScroll)
  }, [carouselCenteredHeight, isCarouselActive])

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
    <div ref={ref} className={clsx('w-screen h-[1000px] bg-slate-300 text-black', 'flex flex-col justify-center')}>
      Special - {isCarouselActive && 'active'} - {currentCarouselIndex}
      {/* carousel */}
      <div
        ref={carouselRef}
        className={clsx('relative bg-slate-100 gap-10 pt-10 pb-10 flex flex-nowrap overflow-scroll p-2 snap-x')}
      >
        <div key={0} className="w-[500px] h-[500px] bg-none animate-pulse shrink-0 blur-sm" />
        {shuffledArtists.length
          ? shuffledArtists.map((artist, index) => (
              <div
                key={index + 1}
                id={artist.name}
                className="flex flex-col justify-center items-center shrink-0 bg-red-300 snap-center carousel-item"
              >
                <Image
                  alt={artist.name}
                  src={artist.artworkPath}
                  width={800}
                  height={500}
                  className="h-[800px] w-atuo object-contain"
                />
              </div>
            ))
          : [...Array(artists.length)].map((_, index) => (
              <div
                key={index + 1}
                className="w-[500px] h-[500px] bg-gray-300 animate-pulse shrink-0 blur-sm snap-center"
              />
            ))}
        <div key={shuffledArtists.length + 1} className="w-[500px] h-[500px] bg-none animate-pulse shrink-0 blur-sm" />
      </div>
    </div>
  )
})

Special.displayName = 'Special'

export default Special
