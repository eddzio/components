"use client"

import React from "react";

// Framer motion
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { useInView } from 'framer-motion';
import { animate, stagger } from "framer-motion";


const Section = ({title, description, children}) => {
    return (
        
        <motion.div 
        className="flex flex-col gap-6 overflow-hidden">
            <div className="flex flex-col gap-1">
                <p className="label-primary">{title}</p>
                <p className="label-secondary max-w-xl">{description}</p>
            </div>

            <div className="
            flex items-center justify-center border border-dashed border-color 
            h-[400px] w-full rounded-[12px]
            bg-stone-100 dark:bg-stone-950 px-2
            overflow-hidden
            ">
                {children}
            </div>

        </motion.div>

    )
}

export default Section;