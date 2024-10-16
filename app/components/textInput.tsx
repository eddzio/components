"use client"

import React from "react";
import { motion } from "framer-motion";

export const TextInput = ({ label, placeholder }: { label: string, placeholder: string }) => {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor="channel-name" className="text-xs dark:text-stone-400 text-stone-600">{label}</label>
            <input type="text" placeholder={placeholder} 
            className="
            p-1.5 text-sm w-full bg-stone-100 
            border border-stone-200 
            rounded-lg 
            focus:outline-none 
            caret-orange-600 
            transition-colors 
            placeholder:text-stone-500 -mt-[1px]
            
            dark:border-stone-600 
            dark:bg-stone-700 
            dark:placeholder:text-stone-400 
            " />

        </div>
    )
}