import Image from 'next/image'

// background for intro section
const IntroBackground = () => {
  return (
    <div className="fixed inset-0">
      <Image
        alt="intro background"
        src="/assets/intro/intro-background.png"
        priority
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="h-full w-full -z-50"
      />
    </div>
  )
}

export default IntroBackground
