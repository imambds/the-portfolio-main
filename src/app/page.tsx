import About from "@/components/about";
import Contact from "@/components/Contact";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Certifications from "@/components/Certifications";
import { Portfolio } from "@/utils/interface";

export default async function Home() {
  const portfolio = (await import("@/dummy.json")).default;

  const {
    about,
    skills,
    projects,
    certifications,
    social_handles,
    timeline,
    email,
  } = portfolio as Portfolio;

  return (
    <main className="relative">
      <Header social={social_handles} />
      <Hero about={about} />
      <About about={about} timeline={timeline} />
      <Skills skills={skills} />
      <Timeline timeline={timeline} />
      <Projects projects={projects} />
      <Certifications certifications={certifications} /> {/* ✅ Fix props */}
      <Contact email={email} social_handle={social_handles} about={about} />
    </main>
  );
}
