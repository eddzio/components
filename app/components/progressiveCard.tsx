"use client"


import React, { useState } from "react";
import { motion, AnimatePresence, stagger, spring } from "framer-motion";
import { IconContainer } from "./iconContainer";
import { ButtonPrimary } from "./buttonPrimary";
import { ButtonSecondary } from "./buttonSecondary";
import { TextInput } from "./textInput";
import { useSpring } from "framer-motion"

export const ProgressiveCard = () => {
    const [showFirstInput, setShowFirstInput] = useState(true);


    const handleContinueClick = () => {
        setShowFirstInput(false);

    };

    const handleBackClick = () => {
        setShowFirstInput(true);

    };

    const cardSizeVariants = {
        one: { height: "185px" },
        two: { height: "260px" }
    }





    return (
        <motion.div 

        variants={cardSizeVariants}
        animate={showFirstInput ? "one" : "two"}
        transition={{ duration: 0.15 }}
        className="bg-card rounded-xl
        border border-stone-200 dark:border-stone-700 w-full max-w-[400px]
        flex flex-col justify-between overflow-hidden
        items-left bg-red-500
        ">

                <div className="p-3 w-full">
                    <h1 className="text-base font-normal tracking-tight">Create a new channel</h1>
                    </div>
                
                <motion.div
                className="p-3 w-full flex flex-col justify-between">    
                    <AnimatePresence mode="wait">
                        {showFirstInput ? (
                            <motion.div

                                key="first"
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100, transition: { duration: 0.1 } }}
                                transition={{ spring: { stiffness: 100, damping: 10, mass: 1 }, duration: 0.2 }}
                            >
                                <p className="text-base text-stone-900 dark:text-stone-50">First screen</p>
                                <p className="text-base text-stone-500 dark:text-stone-400">It's simple and not very tall.</p>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="second"
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 100, transition: { duration: 0.1 } }}
                                transition={{ spring: { stiffness: 100, damping: 10, mass: 1 }, duration: 0.2 }}
                            >

                                <p className="text-base text-stone-900 dark:text-stone-50">Second screen</p>
                                <p className="text-base text-stone-500 dark:text-stone-400">This one is similar to the first one, but it it's taller.</p>
                                


                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                
                <motion.div layout
                className="flex justify-start m-3 gap-3"
                >
                    <ButtonSecondary 
                        label="Go back" 
                        onClick={handleBackClick}
                    />

                    <ButtonPrimary 
                        label="Continue" 
                        onClick={handleContinueClick}
                        
                    />
                
                </motion.div>                


        </motion.div>
    );
}
