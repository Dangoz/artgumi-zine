import React, { useMemo, useEffect, useState, Suspense } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { artists } from '@/models/artists'
import type { Artist } from '@/models/artists'

type SpecialProps = {}

const Special = React.forwardRef<HTMLDivElement, SpecialProps>((props, ref) => {
  const [shuffledArtists, setShuffledArtists] = useState<Artist[]>([])
  useEffect(() => {
    const artistsCopy = [...artists]
    for (let i = artistsCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[artistsCopy[i], artistsCopy[j]] = [artistsCopy[j], artistsCopy[i]]
    }
    setShuffledArtists(artistsCopy)
  }, [])

  return (
    <div ref={ref} className={clsx('w-screen h-[1000px] bg-slate-300 text-black', '')}>
      Special
      {/* carousel */}
      <div className="relative bg-slate-100 gap-2 pt-10 pb-10 flex flex-nowrap overflow-scroll p-2">
        {shuffledArtists.map((artist) => (
          <div key={artist.name} className="flex flex-col justify-center items-center shrink-0 bg-red-500">
            <Image
              key={artist.name}
              alt={artist.name}
              src={artist.artworkPath}
              width={500}
              height={500}
              className="h-[500px] w-atuo object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
})

Special.displayName = 'Special'

export default Special
