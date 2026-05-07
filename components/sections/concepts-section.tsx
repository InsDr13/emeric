"use client";

import React from "react";
import { FocusCards } from "@/components/ui/focus-cards";

export function ConceptsSection() {
  const projects = [


  {
    title: "Mausolée pour un Ancien Gouverneur du Kasai",
    src: "/projet2/p1.jpeg",
    category: "Architecture Commémorative",
    description:
      "Conception d’un espace mémoriel symbolique valorisant l’héritage et la mémoire d’une figure politique majeure.",
    link: "#",
    slides:[
     ,
    ],
  },
  {
    title: "Eglise Charismatique",
    src: "/projet8/p1.jpeg",
    category: "Eglise",
    description:
      "Conception d’Église Charismatique, alliant esthétique moderne, fonctionnalité et respect des exigences liturgiques.",
    link: "#",
    slides:[
     
    ],
  }

  ];

  return (
    <section
      id="work"
      className="relative min-h-screen w-full py-32 md:py-48 bg-black"
    >
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-white/[0.02] via-transparent to-transparent" />

      <div className="swiss-container relative z-10">
        {/* Section header */}
        <div className="mb-16 md:mb-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="font-nohemi text-xs font-medium uppercase tracking-[0.3em] text-white/90 block mb-4">
                Selected Works
              </span>
              <h2 className="font-harmond text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                Concepts
              </h2>
            </div>

            <p className="font-nohemi text-base md:text-lg text-white/80 max-w-md">
             
            </p>
          </div>

          {/* Divider */}
          <div className="mt-8 h-px bg-gradient-to-r from-white/20 via-white/5 to-transparent" />
        </div>

        {/* Projects grid */}
        <FocusCards cards={projects} />        
      </div>
    </section>
  );
}
