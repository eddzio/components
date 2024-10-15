"use client"


import React, { useState } from "react";
import { motion, AnimatePresence, stagger } from "framer-motion";
import { IconContainer } from "./iconContainer";

export const ProgressiveCard = () => {
    return (
        <motion.div className="bg-card rounded-lg shadow-md border border-stone-200 dark:border-stone-800 w-[512px]">
            <div className="flex flex-col items-center">
                <div className="p-5 w-full border-b border-stone-200 dark:border-stone-700"><h1 className="text-lg font-medium">Create a new channel</h1></div>
                
                <div className="p-5 w-full">    

                    <div className="flex flex-col gap-3">
                        <label htmlFor="channel-name" className="text-base">Channel name</label>
                        <input type="text" placeholder="E.g. 'Team meeting'" className="p-3 w-full  bg-stone-200 dark:bg-stone-700 rounded-lg focus:outline-none caret-orange-600 transition-colors dark:placeholder:text-stone-400 placeholder:text-stone-600 bg-transparent -mt-[1px]" />
                    </div>
                    
                    <div className="flex items-center gap-8 py-4">
                        <div className="flex items-center gap-2"><input type="radio" id="public" name="channel-type" className="w-4 h-4 border border-stone-200 dark:border-stone-800 bg-white/5" />
                        <label htmlFor="Individual channel" className="text-base">Individual channel</label></div>

                        <div className="flex items-center gap-2"><input type="radio" id="public" name="channel-type" className="w-4 h-4 border border-stone-200 dark:border-stone-800 bg-white/5" />
                        <label htmlFor="Team channel" className="text-base">Team channel</label></div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}