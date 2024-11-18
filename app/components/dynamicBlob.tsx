"use client"

import { animate, motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronRight, Maximize2, LayoutTemplate, Square, BatteryCharging, CalendarDays, ScanFace } from "lucide-react"
import React from "react"



const blobStyles = "bg-stone-950 hover:shadow-xl h-8 hover:cursor-pointer mx-auto"

const blobVariants = {
    default: { width: 92, height: 32, borderRadius: "16px", padding: "0px" },
    wide: { width: 164, height: 32, borderRadius: "16px", padding: "12px" },
    large: { width: 270, height: 80, borderRadius: "64px", padding: "20px" },
    card: { width: 192, height: 192, borderRadius: "56px", padding: "20px" }
}

// Updated to include both text and corresponding icons
const blobContent = {
    default: { text: "", icon: () => null, color: "", iconSize: 0, strokeWidth: 1 },
    wide: { text: "Charging", icon: BatteryCharging, color: "text-green-400", iconSize: 18, strokeWidth: 2 },
    large: { text: "Meeting in 5 mins", icon: CalendarDays, color: "text-orange-400", iconSize: 24, strokeWidth: 2 },
    card: { text: "", icon: ScanFace, color: "text-stone-200", iconSize: 120, strokeWidth: 1 }
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
        grid grid-cols-1 content-start align-center h-full
        rounded-t-[56px] w-[312px] mt-12 pt-[12px] 
        p-4 overflow-hidden
        bg-card
        border-color
        border-t-8 border-x-8 
        ">
        <motion.div
            className={`${blobStyles} flex items-center justify-between text-white`}
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
            
            >
{/* content */}
            <AnimatePresence mode="wait">
                <motion.div 
                    key={currentVariant}
                    className={`flex items-center ${currentVariant === 'card' ? 'justify-center' : 'justify-between'} w-full text-sm`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ 
                        type: "spring",
                        damping: 30,
                        stiffness: 400
                    }}
                >
                    <span>{blobContent[currentVariant].text}</span>
                    {React.createElement(blobContent[currentVariant].icon, { 
                        size: blobContent[currentVariant].iconSize,
                        className: blobContent[currentVariant].color,
                        strokeWidth: blobContent[currentVariant].strokeWidth
                    })}
                </motion.div>
            </AnimatePresence>
        </motion.div>
        </div>
    )
}