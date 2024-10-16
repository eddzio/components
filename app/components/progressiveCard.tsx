"use client"


import React, { useState } from "react";
import { motion, AnimatePresence, stagger } from "framer-motion";
import { IconContainer } from "./iconContainer";
import { ButtonPrimary } from "./buttonPrimary";
import { ButtonSecondary } from "./buttonSecondary";
import { TextInput } from "./textInput";

export const ProgressiveCard = () => {
    const [showFirstInput, setShowFirstInput] = useState(true);

    const handleContinueClick = () => {
        setShowFirstInput(false);
    };

    const handleBackClick = () => {
        setShowFirstInput(true);
    };

    // const inputVariants = {
    //     present: { opacity: 1, x: 0 },
    //     exit: { opacity: 0, x: -100, transition: { duration: 0.1 } }
    // }
    

    return (
        <motion.div 
        style={{ boxShadow: "rgb(0 0 0 / 8%) 0px 8px 16px 0, inset 0 4px 4px -6px rgb(255 255 255 / 50%)" }}
        layout className="bg-card rounded-xl shadow-md border border-stone-200 dark:border-stone-700 w-full max-w-[400px]">
            <div className="flex flex-col gap-0 items-left overflow-hidden">
                <div className="p-3 w-full"><h1 className="text-base font-normal tracking-tight">Create a new channel</h1></div>
                
                <motion.div 
                className="p-3 w-full flex flex-col gap-2 overflow-hidden">    
                    <AnimatePresence mode="wait">
                        {showFirstInput ? (
                            <motion.div
                            className="opacity-100"
                                key="first"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20, transition: { duration: 0.1 } }}
                                transition={{ duration: 0.1 }}
                            >
                                <TextInput label="First" placeholder="Type something" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="second"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20, transition: { duration: 0.1 } }}
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

                
                <div className="flex justify-start m-3 gap-3">
                    <ButtonSecondary 
                        label="Go back" 
                        onClick={handleBackClick}
                    />

                    <ButtonPrimary 
                        label="Continue" 
                        onClick={handleContinueClick}
                        
                    />
                
                </div>                

            </div>
        </motion.div>
    );
}
