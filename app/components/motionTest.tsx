"use client"

import React from "react";
import { motion } from "framer-motion";

const MotionTest = () => {
    return (
        <div>
            <h1>Motion test</h1>
            <motion.div className="w-10 h-10 bg-accent-primary rounded-full" />
        </div>
    )
}

export default MotionTest;