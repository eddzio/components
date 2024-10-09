"use client"

// Framer motion
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { useInView } from 'framer-motion';
import { animate, stagger } from "framer-motion";


import Section from "./components/section";
import CalendarNotification from "./components/calendarNotification";
import PageHeader from "./components/pageHeader";
import MotionTest from "./components/motionTest";
export default function Home() {



  return (
    <div className="flex flex-col justify-center min-h-screen bg-[background-color:var(--background)] font-[family-name:var(--font-geist-sans)] px-6">
          
      <main className="flex flex-col w-full max-w-4xl gap-8 row-start-2 mx-auto">

      <PageHeader />

{/* content container starts */}
      <motion.div 
      

        variants={{hidden: {opacity: 0, y: 20}, 
        show: {
          opacity: 1, y: 0, 
          transition: {
            staggerChildren: 0.1,
          }, 
        },
      }}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-16 py-8"
      >

        <motion.div
        variants={{hidden: {opacity: 0}, show: {opacity: 1 } }}
        >
          <Section title="Calendar notification" description="Still figuring out the layout of this thing. Inspired by uilabs.dev."><CalendarNotification /></Section>
        
        </motion.div >

        <motion.div
        variants={{hidden: {opacity: 0}, show: {opacity: 1 } }}
        >
          <Section title="Framer motion button" description="Using whileHover and whileTap.">
            <MotionTest />
          </Section>
          
        </motion.div>

      </motion.div>
     
      </main>
     
    </div>
  );
}
