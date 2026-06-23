export const fadeIn = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8
    }
  }
}

export const slideUp = {
  hidden: {
    opacity: 0,
    y: 80
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7
    }
  }
}

export const scaleIn = {
  hidden: {
    scale: 0.7,
    opacity: 0
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}

export const heartPop = {
  hidden: {
    scale: 0
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200
    }
  }
}
