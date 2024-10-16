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

    return (
        <motion.div className="bg-card rounded-xl shadow-md border border-stone-200 dark:border-stone-800 w-[512px]">
            <div className="flex flex-col gap-2 items-left">
                <div className="p-3 w-full border-b border-stone-200 dark:border-stone-700"><h1 className="text-base font-normal tracking-tight">Create a new channel</h1></div>
                
                <div className="p-3 w-full flex flex-col gap-4">    
                    {/* Conditionally render the input fields */}
                    {showFirstInput ? (
                        <TextInput label="First" placeholder="Type something" />
                    ) : (
                        <TextInput label="Second" placeholder="Type something" />
                    )}
                </div>

                
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
