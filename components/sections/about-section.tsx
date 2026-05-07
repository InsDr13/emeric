"use client";
import React, { memo } from "react";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { cn } from "@/lib/utils";

// Simple CSS-based glow text
const GlowText = memo(function GlowText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "relative inline-block transition-all duration-300",
        "hover:text-white",
        className
      )}
      style={{
        textShadow: 'none',
      }}
      onMouseEnter={(e) => {
        (e.target as HTMLElement).style.textShadow = '0 0 20px rgba(255,255,255,0.4)';
      }}
      onMouseLeave={(e) => {
        (e.target as HTMLElement).style.textShadow = 'none';
      }}
      data-cursor-hover
    >
      {children}
    </span>
  );
});

export function AboutSection() {
const skills = [
  "Études de Structure",
  "Génie Civil & BTP",
  "Dessin Technique 2D/3D",
  "Conception de Plans",
  "Calcul de Béton Armé",
  "Exécution & Suivi de Chantier",
  "Modélisation (AutoCAD / ArchiCAD)",
  "Conception BIM (SketchUp)",
  "Visualisation & Rendu (Lumion)",
  "Maîtrise d'œuvre",
  "Expertises Techniques",
  "Management de Projet"
];
  return (
   <section
  id="about"
  className="relative min-h-screen w-full py-32 md:py-48 bg-black"
>
  {/* Grid background */}
  <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />

  <div className="swiss-container relative z-10">
    <div className="swiss-grid">
      {/* Section label */}
      <div className="col-span-4 md:col-span-2 lg:col-span-3 mb-12 md:mb-0">
        <span className="font-nohemi text-xs font-medium uppercase tracking-[0.3em] text-white/95">
          A propos
        </span>
        <div className="mt-4 w-12 h-px bg-white/20" />
      </div>

      {/* Main content */}
      <div className="col-span-4 md:col-span-6 lg:col-span-9">
        {/* Encrypted header */}
      <h3 className="font-harmond text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-8 italic">
		 <EncryptedText
		  text="De la conception technique à l'exécution de projets structurels"
		  encryptedClassName="text-white/30"
		  revealedClassName="text-white"
		  revealDelayMs={40}
		/>
		</h3>

		{/* Bio paragraphs */}
		<div className="space-y-6 font-nohemi text-lg md:text-xl leading-relaxed text-white/60 max-w-3xl">

		  <p className="text-white/80 leading-relaxed">
			Présentation :<br /><br />
			Ingénieur en Génie Civil et Dessinateur Projecteur 2D-3D, je me spécialise dans la conception technique et la réalisation de plans détaillés pour le secteur du bâtiment. Mon expertise s'articule autour de la modélisation structurelle et de la gestion de projets d'envergure, garantissant une transition fluide entre la vision architecturale et la réalité constructive.
		  </p>

		  <p className="text-white/80 leading-relaxed">
			Basé à Abidjan, j'accompagne mes clients à travers une approche intégrée, allant de l'étude de structure à l'exécution et au suivi rigoureux de chantiers. Ma philosophie repose sur la précision technique et la fourniture de solutions innovantes adaptées aux défis infrastructurels contemporains.
		  </p>

		</div>

        {/* Skills grid */}
        <div className="mt-16">
		  <h3 className="font-nohemi text-xs font-medium uppercase tracking-[0.3em] text-white/90 mb-6">
			Expertises Stratégiques & Ingénierie
		  </h3>

		  <div className="flex flex-wrap gap-3">
			{skills.map((skill) => (
			  <span
				key={skill}
				className={cn(
				  "px-4 py-2 rounded-full border border-white/10 bg-white/5",
				  "font-nohemi text-sm text-white/70",
				  "hover:border-white/30 hover:bg-white/10 hover:text-white",
				  "transition-all duration-300"
				)}
				data-cursor-hover
			  >
				{skill}
			  </span>
			))}
		  </div>
		</div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "10+", label: "Années d'expérience" },
            { value: "30+", label: "Projets livrés" },
            { value: "∞", label: "Idées créatives" },
          ].map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="font-harmond text-4xl md:text-5xl font-bold text-white">
                {stat.value}
              </div>
              <div className="font-nohemi text-xs uppercase tracking-widest text-white/80 mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  </div>
  {/* Software Expertise */}
<div className="mt-20">
  <h3 className="font-nohemi text-xs font-medium uppercase tracking-[0.3em] text-white/90 mb-10">
    Expertise Logicielle
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

  {/* Revit*/}
    <div className="group p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300">
      <div className="flex flex-col items-center text-center gap-6">
        <div className="w-52 h-52 flex items-center justify-center bg-black/40 rounded-xl border border-white/10 group-hover:scale-105 transition-transform duration-300">
    <img src="/logos/Revit.jpeg" alt="Revit" className="w-25 h-30 object-contain" />
        </div>
        <div>
          <h4 className="text-white font-nohemi font-medium text-lg">
           Revit Autodesk
          </h4>
          <p className="text-white/60 text-sm mt-2 leading-relaxed">
		    Logiciel BIM qui sert à créer des maquettes 3D intelligentes pour concevoir et coordonner un projet de bâtiment.
          </p>
        </div>
      </div>
    </div>

    {/* AutoCAD */}
    <div className="group p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300">
      <div className="flex flex-col items-center text-center gap-6">
        <div className="w-52 h-52 flex items-center justify-center bg-black/40 rounded-xl border border-white/10 group-hover:scale-105 transition-transform duration-300">
  <img src="logos/autocad.jpeg" alt="AutoCAD" className="w-30 h-50 object-contain" />
</div>
        <div>
          <h4 className="text-white font-nohemi font-medium text-lg">
            Autodesk AutoCAD
          </h4>
          <p className="text-white/60 text-sm mt-2 leading-relaxed">
           Logiciel de base pour la conception pluridisciplinaire et faciliter les échanges des données
          </p>
        </div>
      </div>
    </div>
	
    {/* Rhino */}
    <div className="group p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300">
      <div className="flex flex-col items-center text-center gap-6">
        <div className="w-52 h-52 flex items-center justify-center bg-black/40 rounded-xl border border-white/10 group-hover:scale-105 transition-transform duration-300">
    <img src="/logos/rhino8.jpeg" alt="Rhino8" className="w-25 h-30 object-contain" />
        </div>
        <div>
          <h4 className="text-white font-nohemi font-medium text-lg">
            Rhino 8
          </h4>
          <p className="text-white/60 text-sm mt-2 leading-relaxed">
            Logiciel puissant dans le domaine du Computational Design et du Design Paramétrique. Sert à exprimer les modèles de volumes simples jusqu'aux volumes aux formes les plus complexes.
          </p>
        </div>
      </div>
    </div>

    {/* SketchUp */}
    <div className="group p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300">
      <div className="flex flex-col items-center text-center gap-6">
        <div className="w-52 h-52 flex items-center justify-center bg-black/40 rounded-xl border border-white/10 group-hover:scale-105 transition-transform duration-300">
    <img src="/logos/sketchup.jpeg" alt="SketchUp" className="w-25 h-30 object-contain" />
        </div>
        <div>
          <h4 className="text-white font-nohemi font-medium text-lg">
            SketchUp
          </h4>
          <p className="text-white/60 text-sm mt-2 leading-relaxed">
            Logiciel de base pour la 3D simplifié. Un des plus connus et utilisé dans le monde du CAO.
          </p>
        </div>
      </div>
    </div>
{/* Lumina */}
    <div className="group p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300">
      <div className="flex flex-col items-center text-center gap-6">
        <div className="w-52 h-52 flex items-center justify-center bg-black/40 rounded-xl border border-white/10 group-hover:scale-105 transition-transform duration-300">
    <img src="/logos/lumina.jpeg" alt="Lumina" className="w-25 h-30 object-contain" />
        </div>
        <div>
          <h4 className="text-white font-nohemi font-medium text-lg">
            Lumion
          </h4>
          <p className="text-white/60 text-sm mt-2 leading-relaxed">
           Logiciel puissant de présentation et traitement d'images après la conception 3D. Ce logiciel présente des rendus photo réalistes.  </p>
        </div>
      </div>
    </div>

    {/* ArcGIS */}
    <div className="group p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300">
      <div className="flex flex-col items-center text-center gap-6">
 <div className="w-52 h-52 flex items-center justify-center bg-black/40 rounded-xl border border-white/10 group-hover:scale-105 transition-transform duration-300">
          <img src="/logos/arcgis.jpeg" alt="ArcGIS" className="w-25 h-30 object-contain" />
        </div>
        <div>
          <h4 className="text-white font-nohemi font-medium text-lg">
            ArcGIS
          </h4>
          <p className="text-white/60 text-sm mt-2 leading-relaxed">
           Logiciel de Cartographie Numérique et Géomatique. Gestion des données altimétriques et géodésiques et traitement d'images et données GPS
          </p>
        </div>
      </div>
    </div>

    {/* Twinmotion */}
    <div className="group p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 md:col-span-2 lg:col-span-1">
      <div className="flex flex-col items-center text-center gap-6">
       <div className="w-52 h-52 flex items-center justify-center bg-black/40 rounded-xl border border-white/10 group-hover:scale-105 transition-transform duration-300">
          <img src="/logos/twinmotion.jpeg" alt="Twinmotion" className="w-25 h-30 object-contain" />
        </div>
        <div>
          <h4 className="text-white font-nohemi font-medium text-lg">
            Twinmotion
          </h4>
          <p className="text-white/60 text-sm mt-2 leading-relaxed">
           Logiciel professionel de visualisatio des rendus photo réalistes et traitement d'images après la conception 3D.
          </p>
        </div>
      </div>
    </div>
	
	 {/* EBP */}
    <div className="group p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300">
      <div className="flex flex-col items-center text-center gap-6">
        <div className="w-52 h-52 flex items-center justify-center bg-black/40 rounded-xl border border-white/10 group-hover:scale-105 transition-transform duration-300">
    <img src="/logos/E.jpeg" alt="EBP" className="w-25 h-30 object-contain" />
        </div>
        <div>
          <h4 className="text-white font-nohemi font-medium text-lg">
           Edificius
          </h4>
          <p className="text-white/60 text-sm mt-2 leading-relaxed">
		    Logiciel de BIM pour la conception des Bâtiments et paysages ainsi que la gestions des données CVC
          </p>
        </div>
      </div>
    </div>
	
	
  </div>
</div>
</section>
  );
}
