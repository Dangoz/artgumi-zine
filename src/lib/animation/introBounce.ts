// intro section bounce animations through framer motion

const speed = 3

export const bounceTopLeft = {
  scale: [1, 1.1, 1],
  y: [0, -20, 0],
  x: [0, -20, 0],
  transition: {
    duration: speed,
    ease: 'easeInOut',
    times: [0, 0.5, 1],
    repeat: Infinity,
  },
}

export const bounceTopRight = {
  scale: [1, 1, 1],
  y: [0, -30, 0],
  x: [0, 30, 0],
  transition: {
    duration: speed,
    ease: 'easeInOut',
    times: [0, 0.5, 1],
    repeat: Infinity,
  },
}

export const bounceBottomLeft = {
  scale: [1, 1, 1],
  y: [0, 30, 0],
  x: [0, -30, 0],
  transition: {
    duration: speed,
    ease: 'easeInOut',
    times: [0, 0.5, 1],
    repeat: Infinity,
  },
}

export const bounceBottomRight = {
  scale: [1, 1, 1],
  y: [0, 30, 0],
  x: [0, 30, 0],
  transition: {
    duration: speed,
    ease: 'easeInOut',
    times: [0, 0.5, 1],
    repeat: Infinity,
  },
}
