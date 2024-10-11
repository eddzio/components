"use client"

import React, { useState } from "react";
import { motion, AnimatePresence, stagger } from "framer-motion";
import { IconContainer } from "./iconContainer";




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
        <motion.button 
        whileTap={{ scale: 0.9 }}
        onClick={
            () => setIsOpen(isOpen => !isOpen)}

            className="
            bg-[background-color:var(--background)] 
            shadow-lg shadow-stone-800/10 dark:shadow-stone-950
            rounded-lg px-4 py-2 pl-1.5
            hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors duration-150
            cursor-pointer
            border dark:border-stone-700 border-stone-200
            absolute top-4 left-4
            focus:outline-none
            flex items-center gap-2
            "
            
        >  
            <IconContainer icon="MagnifyingGlassIcon" />
            <p className="text-[var(--label-primary)] text-base mx-auto text-center place-content-center h-full select-none">Toggle search</p>
        </motion.button>



            <AnimatePresence>
                {isOpen && (
                    <div className="flex items-center w-full h-full justify-center place-content-center z-50 px-8">
                        <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                        transition={{ type: "spring", mass: 1, stiffness: 240, damping: 20, duration: 0.1, staggerChildren: 0.05, delayChildren: 0.1 }}
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

