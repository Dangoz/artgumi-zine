import Image from 'next/image'

// background for intro section
const IntroBackground = () => {
  return (
    <div className="fixed inset-0">
      <Image
        alt="intro background"
        src="/assets/intro/intro-background.png"
        priority
        fill
        className="h-full w-full -z-50 object-fill object-center"
      />
    </div>
  )
}

export default IntroBackground
