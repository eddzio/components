import { motion } from "framer-motion";
import Section from "./components/section";
import CalendarNotification from "./components/calendarNotification";
import PageHeader from "./components/pageHeader";
import MotionTest from "./components/motionTest";
export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-screen bg-[background-color:var(--background)] font-[family-name:var(--font-geist-sans)] px-8">
          
      <main className="flex flex-col gap-8 row-start-2 w-[900px] mx-auto">

      <PageHeader />

      <div className="flex flex-col gap-16 py-8">

        <Section title="Calendar notification" description="Still figuring out the layout of this thing. Inspired by uilabs.dev."><CalendarNotification /></Section>

        <Section title="Framer motion test" description="Trying to get Framer motion to work.">
          <MotionTest />
        </Section>

      </div>
     
      </main>
     
    </div>
  );
}
