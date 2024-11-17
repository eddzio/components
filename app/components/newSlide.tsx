"use client"

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAnimate, stagger } from "framer-motion"


const rowStyles = "card w-80 max-w-full h-16"

const container = {
    hidden: {
        opacity: 0,
        y: 10

    },
    whileInView: {
        opacity: 1,
        y: 0,
        transition: {
            delayChildren: 0.7,
            staggerChildren: 0.1,

        }
    },

}

const item = {
    hidden: {
        opacity: 0, 
        y: 10,
        transition: {
            duration: 0.3
        }
    },
    whileInView: {
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.3
        }
    }
}

export const NewSlide = () => {
    return (
        <AnimatePresence>
            <motion.div 
                className="flex flex-col gap-3"
                variants={container}
                initial="hidden"
                whileInView="whileInView"
                transition={{
                    delay: 0.5
                }}

            >
                <motion.div className={rowStyles} variants={item}></motion.div>
                <motion.div className={rowStyles} variants={item}></motion.div>
                <motion.div className={rowStyles} variants={item}></motion.div>
                <motion.div className={rowStyles} variants={item}></motion.div>
            </motion.div>
        </AnimatePresence>
    )
}