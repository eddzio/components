"use client"

import React from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const MotionTest = () => {
    return (

            <motion.div 
            whileHover={{
                scale: 1.1,
                transition: { duration: 0.1 },
              }}
              whileTap={{ 
                scale: 0.95, 
                transition: { duration: 0.1 },
            }}

                className="bg-stone-900 hover:bg-stone-800 shadow-lg shadow-stone-950/30 rounded-full px-8 py-3"
            >  

                <p className="text-stone-50 text-2xl">Press</p>
            </motion.div>

    )
}

export default MotionTest;