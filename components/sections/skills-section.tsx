"use client";

import React, { memo } from "react";
import { cn } from "@/lib/utils";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { KineticMarquee } from "@/components/ui/kinetic-marquee";

import {
  IconCode,
  IconPalette,
  IconDeviceLaptop,
  IconRocket,
  IconBrandThreejs,
  IconApiApp,
} from "@tabler/icons-react";

import { 
  Building2,          // Pour la Conception Architecturale
  Palette,            // Pour le Design d'Espaces
  Settings,           // Pour la Gestion de Projet
  DraftingCompass,    // Pour les Techniques de Construction
  Users,              // Pour la Coordination
  CheckCheck,         // Pour le Contrôle Qualité
  Globe, 
  Briefcase, 
  ShieldCheck, 
  Calculator ,
  Layout, 
  Radio, 
  Cpu,
  Map, 
  ClipboardCheck
} from 'lucide-react';

interface SkillCardProps {
  area?: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Skill card with glowing border gradient effect
const SkillCard = memo(function SkillCard({
  area,
  icon,
  title,
  description,
}: SkillCardProps) {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-2xl border border-white/10 p-2 md:rounded-3xl md:p-3 bg-black-50">
        {/* Glowing border gradient effect */}
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
        />
        
        <div
          className={cn(
            "relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-8",
            "bg-gradient-to-br from-white/[0.03] to-transparent"
          )}
        >
          <div className="relative flex flex-1 flex-col justify-between gap-4">
            {/* Icon */}
            <div className="w-fit rounded-xl border border-white/10 bg-white/5 p-3">
              {icon}
            </div>

            {/* Content */}
            <div className="space-y-3">
              <h3 className="font-harmond text-xl md:text-2xl font-bold text-white">
                {title}
              </h3>
              <p className="font-nohemi text-sm md:text-base text-white/50">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
});

export function SkillsSection() {
 const skills = [
  {
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    icon: <Building2 className="h-6 w-6 text-accent-blue" />,
    title: "Génie Civil & Structures",
    description:
      "Expertise approfondie en études de structures et calcul de béton armé, garantissant la solidité et la pérennité des ouvrages en Côte d'Ivoire.",
  },
  {
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
    icon: <Layout className="h-6 w-6 text-accent-blue" />,
    title: "Dessin & Prototypage",
    description:
      "Élaboration de plans d'exécution précis et conception de détails techniques indispensables à la mise en œuvre sur chantier.", 
  },
  {
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
    icon: <Calculator className="h-6 w-6 text-accent-blue" />, // Changé icon Radio -> Calculator
    title: "Études de Structure",
    description:
      "Analyse rigoureuse des charges et dimensionnement des éléments porteurs pour sécuriser et optimiser chaque projet de construction.", 
  },
  {
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
    icon: <Cpu className="h-6 w-6 text-accent-blue" />,
    title: "Modélisation Numérique",
    description:
      "Maîtrise avancée d'AutoCAD, ArchiCAD et SketchUp pour une visualisation 3D haute définition et une conception de haute précision.", 
  },
  {
    area: "md:[grid-area:3/1/4/7] xl:[grid-area:2/8/3/10]",
    icon: <Briefcase className="h-6 w-6 text-accent-blue" />,
    title: "Gestion de Projet BTP",
    description:
      "Pilotage stratégique des phases d'études, coordination des intervenants et gestion des ressources pour la réussite des projets.", 
  },
  {
    area: "md:[grid-area:3/7/4/13] xl:[grid-area:2/10/3/13]",
    icon: <ClipboardCheck className="h-6 w-6 text-accent-blue" />,
    title: "Suivi d'Exécution",
    description:
      "Supervision rigoureuse sur le terrain et contrôle de conformité pour assurer le respect strict des plans et des délais de livraison.", 
  },
];
  return (
    <section
  id="skills"
  className="relative min-h-screen w-full py-32 md:py-48 bg-black"
>
  <div className="swiss-container relative z-10">
    {/* Section header */}
   <div className="mb-16 md:mb-24">
	  <div>
		<span className="font-nohemi text-xs font-medium uppercase tracking-[0.3em] text-white/40 block mb-4">
		  Expertise & Ingénierie
		</span>
		<h2 className="font-harmond text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
		  Services & Savoir-faire
		</h2>
		<p className="font-nohemi text-lg text-white/50 max-w-xl">
		  Une expertise technique de pointe au service du secteur du BTP, 
		  alliant études de structures, modélisation 2D-3D et suivi rigoureux 
		  pour des projets durables et sécurisés en Côte d'Ivoire.
		</p>
	  </div>
	</div>

    {/* Skills grid */}
   <ul className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
		  {skills.map((skill) => (
			<SkillCard
			  key={skill.title}
			  icon={skill.icon}
			  title={skill.title}
			  description={skill.description}
			/>
		  ))}
	</ul>
    
    <div className="relative -my-16 md:-my-24 z-0 py-20 overflow-visible">
      <KineticMarquee 
        text="DISPONIBLE POUR COLLABORATIONS — GÉNIE CIVIL & INFRASTRUCTURES — EXPERTISE ARCHITECTURALE — TÉLÉCOMMUNICATIONS — "
        baseVelocity={0.5}
        skewFactor={0.8}
      />
    </div>
    
  </div>
</section>
  );
}
