import React from 'react';

/**
 * Arrière-plan global animé de la page d'accueil.
 * Une seule couche fixe (z-index bas) derrière toutes les sections.
 * Animée uniquement via transform et opacity (jamais width/height/position).
 * Respecte prefers-reduced-motion et se simplifie sur mobile (CSS).
 */
const HomeBackground = () => (
    <div
        aria-hidden="true"
        className="home-bg-base pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
        {/* Halos colorés qui dérivent lentement — tons bleu flash / jaune flash */}
        <div className="home-bg-blob home-bg-blob-blue absolute -left-40 top-0 h-[42rem] w-[42rem] rounded-full bg-primary/25 blur-[160px]" />
        <div className="home-bg-blob home-bg-blob-yellow absolute -right-44 top-1/4 h-[40rem] w-[40rem] rounded-full bg-flash/20 blur-[170px]" />
        <div className="home-bg-blob home-bg-blob-cyan absolute left-1/4 -bottom-32 h-[36rem] w-[36rem] rounded-full bg-primary/20 blur-[160px]" />

        {/* Particules géométriques discrètes qui flottent (opacité 10–20%) */}
        <div className="home-bg-particle home-bg-particle-1 absolute left-[12%] top-[20%] h-3 w-3 border border-primary/40" />
        <div className="home-bg-particle home-bg-particle-2 absolute right-[16%] top-[42%] h-2.5 w-2.5 rotate-45 border border-flash/40" />
        <div className="home-bg-particle home-bg-particle-3 absolute left-[62%] bottom-[16%] h-4 w-4 border border-primary/30" />
    </div>
);

export default HomeBackground;
