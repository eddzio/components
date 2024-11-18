"use client"

import { animate, motion } from "framer-motion"
import { useState } from "react"



const blobStyles = "bg-stone-800 hover:shadow-xl h-8 hover:cursor-pointer mx-auto"

const blobVariants = {
    default: { width: 92, height: 32, borderRadius: "16px", marginTop: "10px" },
    wide: { width: 164, height: 32, borderRadius: "16px", marginTop: "10px" },
    large: { width: 280, height: 80, borderRadius: "64px", marginTop: "10px" },
    card: { width: 192, height: 280, borderRadius: "56px", marginTop: "10px" }
}

export const DynamicBlob = () => {
    const [currentVariant, setCurrentVariant] = useState<keyof typeof blobVariants>('default')
    
    const cycleVariant = () => {
        const variants = Object.keys(blobVariants) as (keyof typeof blobVariants)[]
        const currentIndex = variants.indexOf(currentVariant)
        const nextIndex = (currentIndex + 1) % variants.length
        setCurrentVariant(variants[nextIndex])
    }

    return (
        <div className="
        grid grid-cols-1 content-start align-center bg-slate-200 h-full
        rounded-t-[50px] w-[312px] mt-8 border-t-2 border-l-2 border-r-2 border-stone-800
        ">
        <motion.div
            className={blobStyles}
            onClick={cycleVariant}
            whileHover={{
                scale: 1.02
            }}
            animate={blobVariants[currentVariant]}
            transition={{
                type: "spring",
                damping: 30,
                stiffness: 400,
            }}
            whileTap={{
                filter: "blur(4px)"
            }}
          
        ></motion.div>
        </div>
    )
}