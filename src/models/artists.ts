export type Artist = {
  name: string
  artworkPath: string
  description?: string
  twitter?: string
}

export const artists: Artist[] = [
  {
    name: 'Duo',
    artworkPath: '/artworks/duo.gif',
  },
  {
    name: 'Kior',
    artworkPath: '/artworks/kior.jpeg',
    description: `What do we see when seeing shit covered with glitters?
\n\n
    Sparkles and glitters have the power to make things perceived as more valuable than they might be. The power that can deceive glancing eyes that don’t carefully gaze; The power that casts spells on the eyes to believe that what they see has value. Such a magical, superficial, and charming trick!
    
    Do your eyes see what really is beneath the sparkles?`,
    twitter: 'kior_art',
  },
  {
    name: 'Tmoro',
    artworkPath: '/artworks/tomoro.jpeg',
  },
  {
    name: 'Happydrawing',
    artworkPath: '/artworks/happydrawing.jpeg',
  },
  {
    name: 'Masaki_Nakamura',
    artworkPath: '/artworks/masaki-nakamura.jpeg',
  },
]
