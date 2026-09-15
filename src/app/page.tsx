import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Experience from "@/components/Experience";
import AreasOfExperience from "@/components/AreasOfExperience";
import SelectedWork from "@/components/SelectedWork";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Intro />
        <Experience />
        <AreasOfExperience />
        <SelectedWork />
        <Stack />
        <Contact />
      </main>
    </>
  );
}
