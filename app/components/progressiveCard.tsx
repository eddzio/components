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
        handleCardSize(); // Add this line

    };

    const handleBackClick = () => {
        setShowFirstInput(true);
    };


    const handleCardSize = () => {
        setShowFirstInput(false);
    }



    const cardSizeVariants = {
        one: { height: "185px" },
        two: { height: "260px" }
    }





    return (
        <motion.div 
        variants={cardSizeVariants}
        animate={showFirstInput ? "one" : "two"}
        transition={{ spring: { stiffness: 100, damping: 10, mass: 1 }, duration: 0.1 }}
        className="bg-card rounded-xl
        border border-stone-200 dark:border-stone-700 w-full max-w-[400px]
        flex flex-col justify-between overflow-hidden
        items-left bg-red-500
        ">

                <div className="p-3 w-full">
                    <h1 className="text-base font-normal tracking-tight">Create a new channel</h1>
                    </div>
                
                <motion.div layout
                className="p-3 w-full flex flex-col gap-2 ">    
                    <AnimatePresence mode="wait">
                        {showFirstInput ? (
                            <motion.div
                            className="opacity-100"
                                key="first"
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100, transition: { duration: 0.1 } }}
                                transition={{ duration: 0.1 }}
                            >
                                <TextInput label="First" placeholder="Type something" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="second"
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 100, transition: { duration: 0.1 } }}
                                transition={{ duration: 0.1 }}
                            >
                                <div className="flex flex-col gap-4">
                                    <TextInput label="Second" placeholder="Type something" />
                                    <TextInput label="Third" placeholder="Type something" />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                
                <motion.div 
                animate={showFirstInput ? "first" : "second"}
                transition={{ duration: 0.6 }}
                className="flex justify-start m-3 gap-3">
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
