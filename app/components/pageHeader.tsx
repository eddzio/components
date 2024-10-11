import React from "react";
import { motion } from "framer-motion";

const entryVariants = {
    hidden: {opacity: 0, y: 10},
    show: {opacity: 1, y: 0}
}

const PageHeader = () => {
    return (
        <motion.div
        variants={entryVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-1 py-16">
        <h1>Components.fun</h1>
        <h2>A space where I explore UI concepts</h2>
        <p className="label-secondary">Made by <a href="https://twitter.com/eddzio">@eddzio</a></p>
      </motion.div>   
    )
}

export default PageHeader;