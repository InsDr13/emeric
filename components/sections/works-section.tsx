"use client";

import React from "react";
import { FocusCards } from "@/components/ui/focus-cards";

export function WorksSection() {
  const projects = [
    {
      title: "Campus Culturel Sahélien",
      src: "/projet1/M1.jpg",
      category: "Architecture Institutionnelle",
      description:
        "Un complexe architectural audacieux fusionnant héritage culturel, matériaux locaux et aménagement paysager fonctionnel.",
      link: "#",
	  slides:[
          { src: "/projet1/M1_1.jpg",title: "Affiche",
        description: "Image description", },
          { src: "/projet1/M1_2.jpg" },
          { src: "/projet1/M1_3.jpg" },
		  { src: "/projet1/M1_4.jpg" },
		  { src: "/projet1/M1_5.jpg" },
		  { src: "/projet1/M1_6.jpg" },
        ],
    },
    {
      title: "Villa Résidentielle Contemporaine",
      src: "/projet2/p1.jpg",
      category: "Architecture Résidentielle",
      description:
        "Une résidence privée alliant pureté des lignes, matériaux nobles et intégration paysagère harmonieuse pour un confort de vie optimal.",
      link: "#",
	  slides:[
          { src: "/projet2/p1_1.jpg" },
          { src: "/projet2/p1_2.jpg" },
          { src: "/projet2/p1_3.jpg" },
		  { src: "/projet2/p1_4.jpg" },
		
        ],
    },
    {
      title: "Pharmacie Moderne",
      src: "/projet3/p2.jpg",
      category: "Architecture Commerciale",
      description:
        "Un espace de santé optimisé alliant circulation fluide, visibilité accrue des produits et design ergonomique pour une expérience patient intuitive",
      link: "#",
	  slides:[
          { src: "/projet3/p2_1.jpg" },
          { src: "/projet3/p2_2.jpg" },
          { src: "/projet3/p2_3.jpg" },
		  { src: "/projet3/p2_4.jpg" },
		
        ],
    },
    {
      title: "Résidence Privée Élégance",
      src: "/projet4/p3.jpg",
      category: "Architecture Résidentielle",
      description:
        "Une demeure moderne alliant volumes généreux, matériaux haut de gamme et une connexion fluide entre espaces de vie intérieurs et jardins extérieurs",
      link: "#",
	  slides:[
          { src: "/projet4/p3_1.jpg" },
          { src: "/projet4/p3_2.jpg" },
          { src: "/projet4/p3_3.jpg" },
		  { src: "/projet4/p3_4.jpg" },
		  { src: "/projet4/p3_5.jpg" },
		],
    },
    {
      title: "Villa Horizon",
      src: "/projet5/p4.jpg",
      category: "Architecture Résidentielle",
      description:
        "Une villa contemporaine d'exception, caractérisée par ses jeux de volumes asymétriques et ses vastes terrasses ouvertes sur un paysage arboré.",
      link: "#",
	  slides:[
          { src: "/projet5/p4_1.jpg" },
          { src: "/projet5/p4_2.jpg" },
          { src: "/projet5/p4_3.jpg" },
		  { src: "/projet5/p4_4.jpg" },
		  { src: "/projet5/p4_5.jpg" },
		  { src: "/projet5/p4_6.jpg" },
          { src: "/projet5/p4_7.jpg" },
		  { src: "/projet5/p4_8.jpg" },
		  { src: "/projet5/p4_9.jpg" },
		],
    },
    {
      title: "Espace Commercial Stratégique",
      src: "/projet6/M4.jpg",
      category: "Architecture Commerciale",
      description:
        "Une conception orientée vers l'optimisation des flux, alliant modularité des espaces et identité visuelle forte pour une expérience client immersive",
      link: "#",
	  slides:[
          { src: "/projet6/M4_1.jpg" },
          { src: "/projet6/M4_2.jpg" },
          { src: "/projet6/M4_3.jpg" },
		  { src: "/projet6/M4_4.jpg" },
		  { src: "/projet6/M4_5.jpg" },
		  
		],
    },
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
              <span className="font-nohemi text-xs font-medium uppercase tracking-[0.3em] text-white/40 block mb-4">
                Selected Works
              </span>
              <h2 className="font-harmond text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                Projects
              </h2>
            </div>

            <p className="font-nohemi text-base md:text-lg text-white/50 max-w-md">
              Une sélection rigoureuse de projets illustrant mon expertise dans la 
  conception d'infrastructures résilientes et la gestion de chantiers à haute performance.
            </p>
          </div>

          {/* Divider */}
          <div className="mt-8 h-px bg-gradient-to-r from-white/20 via-white/5 to-transparent" />
        </div>

        {/* Projects grid */}
        <FocusCards cards={projects} />

        {/* View all link */}
        <div className="mt-16 flex justify-center">
          <a
            href="#"
            className="group inline-flex items-center gap-3 font-nohemi text-sm uppercase tracking-widest text-white/60 hover:text-white transition-colors duration-300"
            data-cursor-hover
          >
            <span>View All Projects</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
