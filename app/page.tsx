import Image from "next/image";
import Section from "./components/section";
import CalendarNotification from "./components/calendarNotification";

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-screen bg-[background-color:var(--background)] font-[family-name:var(--font-geist-sans)] px-8">
     
     
      <main className="flex flex-col gap-8 row-start-2 w-[900px] mx-auto">

{/* Page header */}
        <div className="flex flex-col gap-1">
          <h1>Playground 2</h1>
          <h2>A space where I explore UI concepts</h2>
          <p className="label-secondary">Made by <a href="https://twitter.com/eddzio">@eddzio</a></p>
        </div>   

        <Section title="Component 1" description="Still figuring out the layout of this thing.">
          <CalendarNotification />
        </Section>

     
     
      </main>
     
     
    </div>
  );
}
