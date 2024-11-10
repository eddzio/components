"use client"

import React from "react";
import { motion } from "framer-motion";

const rowStyles = "card w-80 max-w-full h-16"
const rowAnimation = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.2 } }
}

export const NewSlide = () => {
    return (
        <motion.div 
        className="flex flex-col gap-3"
        >

            <motion.div 
            variants={rowAnimation}
            initial="initial"
            animate="animate"
            className={rowStyles}></motion.div>

            <motion.div 
            variants={rowAnimation}
            initial="initial"
            animate="animate"
            className={rowStyles}></motion.div>
            
            <motion.div 
            variants={rowAnimation}
            initial="initial"
            animate="animate"
            className={rowStyles}></motion.div>

        </motion.div>
    )
}