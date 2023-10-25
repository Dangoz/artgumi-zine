export const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
  if (ref.current) {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    })
  }
}
