"use client"

import { animate, motion } from "framer-motion"
import { useState } from "react"



const blobStyles = "bg-stone-800 hover:shadow-xl h-8 hover:cursor-pointer"

const blobVariants = {
    default: { width: 92, height: 32, borderRadius: "16px" },
    wide: { width: 156, height: 32, borderRadius: "16px" },
    large: { width: 256, height: 64, borderRadius: "64px" },
    card: { width: 256, height: 312, borderRadius: "64px" }
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
        <div className="flex justify-center">
        <motion.div
            className={blobStyles}
            onClick={cycleVariant}
            whileHover={{
                scale: 1.1
            }}
            animate={blobVariants[currentVariant]}
            transition={{
                type: "spring",
                damping: 30,
                stiffness: 400
            }}
            style={{
                filter: "blur(0px)"
            }}
            whileTap={{
                filter: "blur(4px)"
            }}
        ></motion.div>
        </div>
    )
}