"use client"

import React, { useState } from "react";
import { motion } from "framer-motion";


const variants = {
    narrow: {width: "200px"},
    wide: {width: "256px"},
}

export const GrowingButton = () => {
    const [isNarrow, setIsWide] = useState(false)



    return (

        <motion.div 
        animate={isNarrow ? "narrow" : "wide"}
        variants={variants}
        onClick={() => setIsWide(isWide => !isWide)}

            className="bg-stone-900 hover:bg-stone-800 shadow-lg shadow-stone-950/30 rounded-full px-8 py-3"
        >  
            <p className="text-stone-50 text-2xl">Press</p>
        </motion.div>

    )
}

