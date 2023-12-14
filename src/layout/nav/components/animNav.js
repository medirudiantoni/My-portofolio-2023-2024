export const menuSlide = {
    initial: {
        y: "-100%"
    },
    enter: {
        y: "0%",
        transition: {
            duration: 1,
            ease: [0.76, 0, 0.24, 1]
        }
    },
    exit: {
        y: "-100%",
        transition: {
            duration: 1,
            ease: [0.76, 0, 0.24, 1],
            delay: 0.35
        }
    }
}


export const slideText = {
    initial: {
        y: "150%"
    },
    enter: (i) => ({
        y: "0%",
        transition: {
            duration: 1,
            ease: [0.76, 0, 0.24, 1],
            delay: (0.03 * i) + 0.3
        }
    }),
    exit: (i) => ({
        y: "150%",
        transition: {
            duration: 1,
            ease: [0.76, 0, 0.24, 1],
            delay: (0.03 * i)
        }
    })
}

export const borderBottom = {
    initial: {
        x: "-150%"
    },
    enter: (i) => ({
        x: "-0%",
        transition: {
            duration: 1,
            ease: [0.76, 0, 0.24, 1],
            delay: (0.03 * i) + 0.3
        }
    }),
    exit: (i) => ({
        x: "-150%",
        transition: {
            duration: 1,
            ease: [0.76, 0, 0.24, 1],
            delay: (0.03 * i)
        }
    })
}