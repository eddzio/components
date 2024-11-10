"use client"

import React from "react";
import { motion } from "framer-motion";

const rowStyles = "card w-80 max-w-full h-16"

const rowAnimation = {
    hidden: {opacity: 0, y: 10}, 
    show: {opacity: 1, y: 0, 
        transition: {repeat: 3, repeatDelay: 1, rduration: 2, staggerChildren: 0.5, delayChildren: 1}}

}


export const NewSlide = () => {
    return (
        <motion.div 
        className="flex flex-col gap-3"
        variants={rowAnimation}
        initial="hidden"
        animate="show"

        
        >

            <motion.div 
            variants={rowAnimation}
            className={rowStyles}></motion.div>

            <motion.div 
            variants={rowAnimation}
            className={rowStyles}></motion.div>

            <motion.div 
            variants={rowAnimation}
            className={rowStyles}></motion.div>

        </motion.div>
    )
}