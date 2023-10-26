import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { artists } from '@/models/artists'

type SpecialProps = {}

const Special = React.forwardRef<HTMLDivElement, SpecialProps>((props, ref) => {
  return (
    <div ref={ref} className={clsx('w-screen h-[1000px] bg-slate-300 text-black', '')}>
      Special
      {/* carousel */}
      <div className="relative bg-slate-100 gap-2 pt-10 pb-10 p-2 flex flex-nowrap overflow-scroll">
        {artists.map((artist) => (
          <div key={artist.name} className="flex flex-col justify-center items-center shrink-0">
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
