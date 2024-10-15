"use client"


import React, { useState } from "react";
import { motion, AnimatePresence, stagger } from "framer-motion";
import { IconContainer } from "./iconContainer";

export const ProgressiveCard = () => {
    return (
        <motion.div className="bg-card rounded-lg shadow-md border border-stone-200 dark:border-stone-800 w-[512px]">
            <div className="flex flex-col items-center justify-between">
                <div className="p-5 w-full border-b border-stone-200 dark:border-stone-800"><h1 className="text-lg font-medium">Create a new channel</h1></div>
                <div className="p-5 w-full">
                    <input type="text" placeholder="Channel name" className="w-full p-2 rounded-md border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-800  " />
                    
                    <div className="flex items-center gap-8 py-4">
                        <div className="flex items-center gap-2"><input type="radio" id="public" name="channel-type" className="w-4 h-4 border border-stone-200 dark:border-stone-800 bg-white/5" />
                        <label htmlFor="Individual channel" className="text-base font-medium">Individual channel</label></div>

                        <div className="flex items-center gap-2"><input type="radio" id="public" name="channel-type" className="w-4 h-4 border border-stone-200 dark:border-stone-800 bg-white/5" />
                        <label htmlFor="Team channel" className="text-base font-medium">Team channel</label></div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}