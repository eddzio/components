"use client"


import React, { useState } from "react";
import { motion, AnimatePresence, stagger, spring } from "framer-motion";
import { IconContainer } from "./iconContainer";
import { ButtonPrimary } from "./buttonPrimary";
import { ButtonSecondary } from "./buttonSecondary";


export const ProgressiveCard = () => {
    const [showFirstInput, setShowFirstInput] = useState(true);


    const handleContinueClick = () => {
        setShowFirstInput(false);

    };

    const handleBackClick = () => {
        setShowFirstInput(true);

    };

    const cardSizeVariants = {
        one: { height: "180px" },
        two: { height: "230px" }
    }


    return (
        <motion.div 

        variants={cardSizeVariants}
        animate={showFirstInput ? "one" : "two"}
        transition={{ type: "spring", stiffness: 500, damping: 30, mass: 1 }}
        className="bg-card rounded-xl
        border border-stone-200 dark:border-stone-700 w-full max-w-[400px]
        flex flex-col justify-between overflow-hidden
        items-left bg-red-500
        ">

                <div className="p-3 w-full"><h1 className="text-base font-semibold tracking-tight">Progressive card</h1></div>
                
                <motion.div
                className="p-3 w-full">    
                    <AnimatePresence mode="wait">
                        {showFirstInput ? (
                            <motion.div
                                key="first"
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100, transition: { duration: 0.1 } }}
                                transition={{ type: "spring", stiffness: 500, damping: 30, mass: 1}}
                            >

                                <p className="text-base text-stone-500 dark:text-stone-400">This is the first page. It's simple and not very tall.</p>
                                <p className="text-base text-stone-500 dark:text-stone-400">It's simple and not very tall.</p>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="second"
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}

                                transition={{ type: "spring", stiffness: 500, damping: 30, mass: 1}}
                            >


                                <p className="text-base text-stone-500 dark:text-stone-400">
                                    This is the second page. It's similar to the first one, but it it's taller. So it can accomodate more content.
                                </p>
                                
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                
                <motion.div layout
                className="flex justify-start m-3 gap-2"
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
