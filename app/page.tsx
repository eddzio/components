import Image from "next/image";
import Section from "./components/section";
import CalendarNotification from "./components/calendarNotification";
import PageHeader from "./components/pageHeader";
export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-screen bg-[background-color:var(--background)] font-[family-name:var(--font-geist-sans)] px-8">
     
     
      <main className="flex flex-col gap-8 row-start-2 w-[900px] mx-auto">

{/* Page header */}
<PageHeader />

        <div className="flex flex-col gap-16 py-8">

          <Section title="Calendar notification" description="Still figuring out the layout of this thing. Inspired by uilabs.dev.">
            <CalendarNotification />
          </Section>


        </div>
     
      </main>
     
     
    </div>
  );
}
