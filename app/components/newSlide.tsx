"use client"

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const rowStyles = "card w-80 max-w-full h-16"

const container = {
    hidden: {
        opacity: 0,
        transition: {
            staggerChildren: 0.5,
        }
    },
    whileInView: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,

        }
    },
    exit: {
        opacity: 0,
        transition: {
            staggerChildren: 0.5
        }
    }
}

const item = {
    hidden: {
        opacity: 0, 
        y: 10,
        transition: {
            duration: 0.5
        }
    },
    whileInView: {
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.5
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
                exit="exit"
            >
                <motion.div className={rowStyles} variants={item}></motion.div>
                <motion.div className={rowStyles} variants={item}></motion.div>
                <motion.div className={rowStyles} variants={item}></motion.div>
            </motion.div>
        </AnimatePresence>
    )
}