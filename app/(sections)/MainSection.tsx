import ContactSection from "./ContactSection";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import ResumeSection from "./ResumeSection";
import StackSection from "./StackSection";

function MainSection() {
  return (
    <div className="flex flex-col w-full md:col-start-2 lg:col-start-3">
      <div className="pb-8 px-4 bg-secondary bg-[linear-gradient(120deg,_rgba(255,255,255,0.08),_rgba(255,255,255,0))]  lg:rounded-tr-4xl">
        <HeroSection />
      </div>

      <div className="mb-4"></div>
      <div className="pb-8 px-4 bg-secondary bg-[linear-gradient(120deg,_rgba(255,255,255,0.08),_rgba(255,255,255,0))]">
        <ResumeSection />
      </div>
      <div className="mb-4"></div>
      <div className="pb-8 bg-secondary  bg-[linear-gradient(120deg,_rgba(255,255,255,0.08),_rgba(255,255,255,0))]">
        <StackSection />
      </div>
      <div className="mb-4"></div>

      <div className="bg-secondary bg-[linear-gradient(120deg,_rgba(255,255,255,0.08),_rgba(255,255,255,0))] ">
        <ProjectsSection />
      </div>
      <div className="mb-4"></div>

      <div className="bg-secondary lg:rounded-b-4xl bg-[linear-gradient(120deg,_rgba(255,255,255,0.08),_rgba(255,255,255,0))]">
        <ContactSection />
      </div>
    </div>
  );
}
export default MainSection;
