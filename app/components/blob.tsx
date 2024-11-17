"use client"

import { animate, motion } from "framer-motion"
import { useState } from "react"



const blobStyles = "bg-stone-800 shadow-xl rounded-full h-8"

const blobVariants = {
    default: { width: 128, height: 32 },
    wide: { width: 256, height: 32 },
    large: { width: 256, height: 64 },
    card: { width: 256, height: 256 }
}

export const Blob = () => {
    const [currentVariant, setCurrentVariant] = useState<keyof typeof blobVariants>('default')
    
    const cycleVariant = () => {
        const variants = Object.keys(blobVariants) as (keyof typeof blobVariants)[]
        const currentIndex = variants.indexOf(currentVariant)
        const nextIndex = (currentIndex + 1) % variants.length
        setCurrentVariant(variants[nextIndex])
    }

    return (
        <motion.div
            className={blobStyles}
            onClick={cycleVariant}
            animate={blobVariants[currentVariant]}
            transition={{
                type: "spring",
                damping: 13
            }}
        ></motion.div>
    )
}