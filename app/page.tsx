import { FloatingNav } from "@/components/ui/floating-navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { WorksSection } from "@/components/sections/works-section";
import { ProcessSection } from "@/components/sections/process-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { FooterSection } from "@/components/sections/footer-section";
import { CurtainRevealLayout } from "@/components/curtain-reveal-layout";
import { KineticMarquee } from "@/components/ui/kinetic-marquee";



export default function Home() {
  
 

  
  const navItems = [
    { name: "À propos", link: "#about" },
	{ name: "Expertise", link: "#skills" }, // "Skills" fait un peu trop "développeur", Expertise est plus statutaire
    { name: "Projets", link: "#work" },
    { name: "Méthodologie", link: "#process" },
    
];

  return (
    <>
      {/* Floating Navigation */}
      <FloatingNav navItems={navItems} />

      <CurtainRevealLayout footer={<FooterSection />}>
        {/* Hero Section - The Hook */}
        <HeroSection />

        {/* Kinetic Marquee - Breaking the grid */}
        <div className="relative -my-16 md:-my-24 z-0 py-20 overflow-visible">
          <KineticMarquee 
			  text="ARCHITECTURE — INFRASTRUCTURE — BIM & SIG — MANAGEMENT — RESILIENCE — PLANNING — "
			  baseVelocity={0.5}
			  skewFactor={0.8}
		   />
        </div>

        {/* About Section - The Pitch */}
        <AboutSection />
{/* Skills & Services - Bento Grid */}
        <SkillsSection />
        {/* Selected Works - The Core */}
        <WorksSection />

        {/* Kinetic Marquee - Second instance */}
        <div className="relative -my-16 md:-my-24 z-0 py-20 overflow-visible">
          <KineticMarquee 
			  text="DISPONIBLE POUR COLLABORATIONS STRATÉGIQUES — EXPERTISE INFRASTRUCTURE — PERFORMANCE & RÉSILIENCE — "
			  baseVelocity={-0.4}
			  skewFactor={0.6}
			/>
        </div>

        {/* Process Section - Timeline */}
        <ProcessSection />

        
      </CurtainRevealLayout>
    </>
  );
}
