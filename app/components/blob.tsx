"use client"

import { animate, motion } from "framer-motion"



const blobStyles = "bg-stone-800 shadow-xl rounded-full h-12"

export const Blob = () => {
    return (
        <motion.div
        className={blobStyles}

        animate={{
            width: [128, 256],
            transition: {
                type: "spring", damping: 13,
                repeat: Infinity,
                repeatDelay: 0.2,
                repeatType: "mirror"
            }
        }}
       
        ></motion.div>
    )
}