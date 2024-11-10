"use client"

import { motion } from "framer-motion";
import PageHeader from "./components/pageHeader";
import Section from "./components/section";
import { QuickMenu } from "./components/quickMenu";
import { ProgressiveCard } from "./components/progressiveCard";
import { Coins } from "./components/coins";
import { NewSlide } from "./components/newSlide";

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
          
      <main className="flex flex-col w-full max-w-3xl gap-8 mx-auto">

      <PageHeader />


      <div
      className="flex flex-col gap-16 py-8"
      >


{/* New slide */}
<Section title="New slide · work in progress"
 description="Working on a prototype for a new slide page for a new feature I'm working on. I'm planning how the animation should look when the new slide page loads.">
  <NewSlide />
</Section>

{/* Coins */}
          {/* <Section 
          title="3D Coins" 
          description="
          I've been learning 3D modeling recently.
          I made these coins with Spline which allowed me to export them into Next.js.
          For the material of the coins, I wanted to make a shiny metal that looked heavy.
          I applied different rotation speeds to further give the impression of a dense alloy.
          ">
            <Coins />
          </Section> */}

{/* Progressive card */}
          <motion.div
          variants={itemVariants}
          >
            <Section title="Progressive card" description="A two-step dialog that changes to accommodate different types of input. Made with Framer Motion, Tailwind and React.">
              <ProgressiveCard />
            </Section>
          </motion.div>

{/* Quick menu */}
          <motion.div
          variants={itemVariants}
          >
            <Section title="Quick menu" description="A concept for quicly jumping around a web app. Made with Framer Motion, Tailwind and React.">
              <QuickMenu />
            </Section>
          </motion.div>


          
 

      </div>
     
      </main>
     
    </motion.div>
  );
}
