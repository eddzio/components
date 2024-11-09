"use client"

import React, { useState } from "react";
import { motion, AnimatePresence, stagger } from "framer-motion";
import { IconContainer } from "./iconContainer";
import { ButtonSecondary } from "./buttonSecondary";




export const QuickMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    

const itemVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.1 } }
}

const listItemStyle = 
"p-3 list-none hover:bg-white/5 flex items-center gap-3 cursor-pointer text-left m-1 rounded-lg w-full transition-colors text-stone-400 hover:text-stone-50"


    return (

        <div className="relative h-full w-full">
            
            <div className="m-6">
            <ButtonSecondary
            label="Toggle menu"
            onClick={
                () => setIsOpen(isOpen => !isOpen)}            
            />
            </div>



            <AnimatePresence>
                {isOpen && (
                    <div className="flex items-center w-full z-50 px-8">
                        <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.1 } }}
                        exit={{ opacity: 0, y: 10, scale: 0.97 }}
                        // transition={{ type: "spring", mass: 0.5, stiffness: 300, damping: 30, duration: 0.5, staggerChildren: 0.05, delayChildren: 0.1 }}
                        className="
                        place-self-center mx-auto 
                        items-center bg-stone-800 rounded-xl text-stone-50 mt-8
                        border border-t-2 border-stone-700/50
                        w-full max-w-lg
                        overflow-hidden
                        shadow-stone-950/20
                        shadow-xl
                        bg-gradient-to-br from-stone-900 to-stone-800
                        flex flex-col
                        p-1
                        "
                    >

                        <input type="text" placeholder="Search..." className="p-3 w-full hover:bg-white/5 bg-stone-800 rounded-lg  focus:outline-none caret-orange-600 transition-colors placeholder:text-stone-500 bg-transparent -mt-[1px]" />
                        <motion.li variants={itemVariants} className={listItemStyle}
                        >
                            <IconContainer icon="DashboardIcon" color="#fdba74" />
                            Dashboard </motion.li>
                        <motion.li variants={itemVariants} className={listItemStyle}>
                        <IconContainer icon="PersonIcon" color="#fdba74" />
                            Account settings</motion.li>
                        <motion.li variants={itemVariants} className={listItemStyle}>
                        <IconContainer icon="EnvelopeOpenIcon" color="#fdba74" />
                            Messages</motion.li>


                    </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>

        

    )
}

