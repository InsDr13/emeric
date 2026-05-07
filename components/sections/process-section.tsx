"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function ProcessSection() {
 const timelineData = [
  {
    title: "01",
    date: "Analyse & Diagnostic",
    content: (
      <div className="space-y-4">
        <h4 className="font-harmond text-2xl md:text-3xl font-bold text-white">
          Étude de Faisabilité & Structure
        </h4>
        <p className="font-nohemi text-base text-white/60 max-w-lg">
          Tout projet débute par une immersion technique. J'évalue les contraintes structurelles et les spécificités du terrain pour définir une stratégie constructive sécurisée et optimisée.
        </p>
        <ul className="space-y-2 font-nohemi text-sm text-white/50">
          <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-accent-blue" />Analyse des contraintes de sol et de structure </li>
          <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-accent-blue" />Dimensionnement préliminaire en génie civil </li>
          <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-accent-blue" />Audit de conformité des plans existants </li>
        </ul>
      </div>
    ),
  },
  {
    title: "02",
    date: "Conception & Modélisation",
    content: (
      <div className="space-y-4">
        <h4 className="font-harmond text-2xl md:text-3xl font-bold text-white">
          Ingénierie Digitale & Plans 3D
        </h4>
        <p className="font-nohemi text-base text-white/60 max-w-lg">
          Je transforme les calculs techniques en maquettes numériques précises. Cette phase garantit une cohérence totale entre les plans architecturaux et les exigences du génie civil.
        </p>
        <ul className="space-y-2 font-nohemi text-sm text-white/50">
          <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-accent-blue" />Conception de plans d'exécution (AutoCAD / ArchiCAD) </li>
          <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-accent-blue" />Modélisation 3D et rendus d'études (SketchUp / Lumion) </li>
          <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-accent-blue" />Détails techniques et ferraillage des structures </li>
        </ul>
      </div>
    ),
  },
  {
    title: "03",
    date: "Planification & Études",
    content: (
      <div className="space-y-4">
        <h4 className="font-harmond text-2xl md:text-3xl font-bold text-white">
          Dossier Technique & Méthodes
        </h4>
        <p className="font-nohemi text-base text-white/60 max-w-lg">
          Je structure la mise en œuvre en préparant les documents indispensables au chantier. Ma rigueur dans l'élaboration des dossiers techniques anticipe les besoins matériels pour éviter tout retard.
        </p>
        <ul className="space-y-2 font-nohemi text-sm text-white/50">
          <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-accent-blue" />Élaboration du cahier des charges techniques </li>
          <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-accent-blue" />Planification des étapes de construction (Planning) </li>
          <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-accent-blue" />Optimisation des ressources et métrés </li>
        </ul>
      </div>
    ),
  },
  {
    title: "04",
    date: "Exécution & Livraison",
    content: (
      <div className="space-y-4">
        <h4 className="font-harmond text-2xl md:text-3xl font-bold text-white">
          Suivi & Contrôle Terrain
        </h4>
        <p className="font-nohemi text-base text-white/60 max-w-lg">
          La phase finale assure la parfaite conformité entre les études et la réalité. Je supervise l'exécution pour garantir la pérennité et la sécurité de chaque structure livrée.
        </p>
        <ul className="space-y-2 font-nohemi text-sm text-white/50">
          <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-accent-blue" />Supervision technique et contrôle de chantier </li>
          <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-accent-blue" />Vérification de la mise en œuvre du béton armé </li>
          <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-accent-blue" />Réception finale et rapport de conformité </li>
        </ul>
      </div>
    ),
  },
];
  return (
    <section
	  id="process"
	  className="relative min-h-screen w-full py-32 md:py-48 bg-black"
	>
	  {/* Background gradient */}
	  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/[0.02] to-transparent" />

	  <div className="swiss-container relative z-10">
		{/* Section header */}
		<div className="mb-16 md:mb-24 max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
		  <div>
			<span className="font-nohemi text-xs font-medium uppercase tracking-[0.3em] text-white/40 block mb-4">
			  Méthodologie & Performance
			</span>
			<h2 className="font-harmond text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
			  Mon Processus
			</h2>
			<p className="font-nohemi text-lg text-white/50 max-w-xl">
			  Une approche d'ingénierie rigoureuse qui transforme vos concepts techniques en structures réelles, 
			  alliant précision du dessin 2D-3D et expertise en calcul de structure pour des ouvrages 
			  fiables et parfaitement exécutés.
			</p>
		  </div>
		</div>

		{/* Timeline */}
		<Timeline data={timelineData} />
	  </div>
	</section>
  );
}
