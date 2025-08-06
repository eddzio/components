"use client"

import { motion } from "framer-motion";
import PageHeader from "./components/pageHeader";
import Section from "./components/section";
import { QuickMenu } from "./components/quickMenu";
import { ProgressiveCard } from "./components/progressiveCard";
import Coins from "./components/coins";
import { NewSlide } from "./components/newSlide";
import { DynamicBlob } from "./components/dynamicBlob";
import EmployeesTable from "./components/EmployeesTable";
import LoadingIndicator from "./components/loadingIndicator";
import PNGAnimation from "./components/UserAnimation";
import CrossFilter from "./components/CrossFilter";

export default function Home() {

  const containerVariants = {
    hidden: {opacity: 0, y: 20}, 
    show: {opacity: 1, y: 0, transition: {delayChildren: 0.3, staggerChildren: 0.2}}
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



{/* Secondary filter */}
<Section title="Cross-filtering dropdowns"
 description="An optional secondary dropdown that allows you to cross-filter data. This came up as a concept for a cross-filtering feature we were working on at Zoios.">
  <div><CrossFilter /></div>
</Section>


{/* Empty state */}
<Section title="Empty state illustration"
 description="I designed this as an empty state illustration for a feature in Zoios called Groups. Because of the grows and transparency, I ended up using PNGs instead of SVGs. I used Framer Motion with the spring function for the animation.">
  <div><PNGAnimation /></div>
</Section>


{/* Table component */}
<Section title="Table component"
 description="This component started as a Figma design that I then converted to code using Meng To's Figma to AI Code plugin. I then used Cursor to add sorting by column, partial selection, and some styling.">
  <div className="overflow-x-auto">
    <EmployeesTable />
  </div>
</Section>



{/* New slide */}
<Section title="Dynamic Island"
 description="
 Recreated the transitions of Apple's Dynamic Island. Click to cycle through the different sizes.">
  <DynamicBlob />
</Section>


{/* New slide */}
<Section title="New slide"
 description="
 I was planning an animation that plays when a new page loads.
 For this prototype, I used staggerChildren to orchestrate the animation of the cards.">
  <NewSlide />
</Section>



{/* Coins */}
          <Section 
          title="3D Coins" 
          description="
          I've been learning 3D modeling recently.
          I made these coins with Spline which allowed me to export them into Next.js.
          For the material of the coins, I wanted to make a shiny metal that looked heavy.
          I applied different rotation speeds to further give the impression of a dense alloy.
          ">
            <Coins />
          </Section>

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
