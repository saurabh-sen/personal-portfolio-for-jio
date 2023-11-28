import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Homepage from "@/components/Homepage/Homepage";
import MainWrapper from "@/components/MainWrapper/MainWrapper";
import Projects from "@/components/Projects/Projects";
import Resume from "@/components/Resume/Resume";

export default function Home() {
  return (
    <MainWrapper>
      <Homepage />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </MainWrapper>
  )
}
