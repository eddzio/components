"use client"

import { motion } from "framer-motion";

import Section from "./components/section";
import CalendarNotification from "./components/calendarNotification";
import PageHeader from "./components/pageHeader";
import { GrowingButton } from "./components/growingButton";
export default function Home() {

  const containerVariants = {
    hidden: {opacity: 0, y: 20}, 
    show: {
    opacity: 1, 
    y: 0, 
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
    }, 
    },
  }

  const itemVariants = {
    hidden: {opacity: 0, y: 10},
    show: {opacity: 1, y: 0}
  }

  return (
    <div className="flex flex-col justify-center bg-[background-color:var(--background)] font-[family-name:var(--font-geist-sans)] px-4">
          
      <main className="flex flex-col w-full max-w-4xl gap-8 mx-auto">

      <PageHeader />

{/* content container starts */}
      <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-16 py-8"
      >
          <motion.div
          variants={itemVariants}
          >
            <Section title="Framer motion button" description="Using whileHover and whileTap.">
              <GrowingButton />
            </Section>
          </motion.div>
          
          <motion.div
          variants={itemVariants}
          >
            <Section title="Calendar notification" description="Still figuring out the layout of this thing. Inspired by uilabs.dev."><CalendarNotification /></Section>
          </motion.div >



      </motion.div>
     
      </main>
     
    </div>
  );
}
