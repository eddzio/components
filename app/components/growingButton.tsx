"use client"

import React, { useState } from "react";
import { motion } from "framer-motion";


const variants = {
    narrow: {width: "128px"},
    wide: {width: "200px", height: "92px"},
    transition: {duration: 2}
}

export const GrowingButton = () => {
    const [isNarrow, setIsWide] = useState(false)



    return (

        <motion.div 
        animate={isNarrow ? "narrow" : "wide"}
        variants={variants}
        onClick={() => setIsWide(isWide => !isWide)}

            className="
            bg-stone-900 shadow-lg shadow-stone-950/30 rounded-full px-8 py-3 
            hover:bg-stone-800 transition-colors duration-150
            cursor-pointer"
        >  
            <p className="text-stone-50 text-2xl mx-auto text-center place-content-center h-full  select-none">Press</p>
        </motion.div>

    )
}

