"use client"

import { motion } from "framer-motion";
import PageHeader from "./components/pageHeader";
import Section from "./components/section";
import { QuickMenu } from "./components/quickMenu";
import { ProgressiveCard } from "./components/progressiveCard";

export default function Home() {

  const containerVariants = {
    hidden: {opacity: 0, y: 20}, 
    show: {
    opacity: 1, 
    y: 0, 
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    }, 
    },
  }

  const itemVariants = {
    hidden: {opacity: 0, y: 10},
    show: {opacity: 1, y: 0}
  }

  return (
    <motion.div 
    variants={containerVariants}
    initial="hidden"
    animate="show"
    className="flex flex-col justify-center bg-[background-color:var(--background)] font-[family-name:var(--font-geist-sans)] px-4">
          
      <main className="flex flex-col w-full max-w-4xl gap-8 mx-auto">

      <PageHeader />


      <div
      className="flex flex-col gap-16 py-8"
      >
          <motion.div
          variants={itemVariants}
          >
            <Section title="Quick menu" description="A concept for quicly jumping around a web app. Made with Framer Motion, Tailwind and React.">
              <QuickMenu />
            </Section>
          </motion.div>

          <motion.div
          variants={itemVariants}
          >
            <Section title="Progressive card" description="A two-step dialog that changes to accommodate different types of input. Made with Framer Motion, Tailwind and React.">
              <ProgressiveCard />
            </Section>
          </motion.div>
          
 

      </div>
     
      </main>
     
    </motion.div>
  );
}
