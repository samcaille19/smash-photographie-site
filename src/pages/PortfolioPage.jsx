import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { cn } from '@/lib/utils';

const EXHIBITS = [
    {
        src: 'https://horizons-cdn.hostinger.com/9d064160-0699-45ef-a183-310baec5c368/copie-de-dsc00090-1-2-26bUM.jpg',
        title: 'Jante DY',
        meta: 'Gros plan sur une jante noire DY Design et un pneu Proxes Sport, reflets d’atelier.',
        aspect: 'aspect-[3/4]',
        alt: 'Roue noire cinq branches DY Design et pneu Proxes Sport sur carrosserie grise en atelier',
    },
    {
        src: 'https://horizons-cdn.hostinger.com/9d064160-0699-45ef-a183-310baec5c368/img_1519-1-eJltM.JPG',
        title: 'Jaune chrome',
        meta: 'Arrière d’une Volkswagen jaune, feu rouge et monogramme chrome sur le sable.',
        aspect: 'aspect-[3/4]',
        fit: 'object-cover',
        alt: 'Détail arrière d’une Volkswagen jaune avec feu rouge et logo chrome sur plage',
    },
    {
        src: 'https://horizons-cdn.hostinger.com/9d064160-0699-45ef-a183-310baec5c368/copie-de-dsc00092-1-2-H1BWe.jpg',
        title: 'Optique carbone',
        meta: 'Phare double d’une sportive grise, capot fibre de carbone et grilles d’admission.',
        aspect: 'aspect-[3/4]',
        alt: 'Gros plan phare et capot carbone d’une voiture de sport grise en atelier',
    },
    {
        src: 'https://horizons-cdn.hostinger.com/9d064160-0699-45ef-a183-310baec5c368/portfolio-photo-2-GiP0U.jpg',
        title: 'Rive fleurie',
        meta: 'Portrait au bord de la rivière, bouquet en main et pont turquoise en fond.',
        aspect: 'aspect-[4/3]',
        alt: 'Jeune femme en robe fleurie tenant un bouquet devant une rivière et un pont bleu',
    },
    {
        src: 'https://horizons-cdn.hostinger.com/9d064160-0699-45ef-a183-310baec5c368/copie-de-dsc00114-2-7FOEF.jpg',
        title: 'Hémérocalle',
        meta: 'Fleur rouge-orangé nette au premier plan, façade floue derrière.',
        aspect: 'aspect-[4/3]',
        alt: 'Hémérocalle rouge et jaune en gros plan avec arrière-plan urbain flou',
    },
    {
        src: 'https://horizons-cdn.hostinger.com/9d064160-0699-45ef-a183-310baec5c368/portfolio-photo-1-bRG5d.jpg',
        title: 'Regard rivière',
        meta: 'Portrait face caméra, cheveux longs et robe fleurie devant le pont bleu.',
        aspect: 'aspect-[4/3]',
        alt: 'Portrait d’une jeune femme blonde en robe blanche fleurie près d’une rivière',
    },
    {
        src: 'https://horizons-cdn.hostinger.com/9d064160-0699-45ef-a183-310baec5c368/alexis-attaque-Nqxpb.JPG',
        title: 'Attaque outdoor',
        meta: 'Bras tendu au filet, ballon coloré figé sous un ciel d’été.',
        aspect: 'aspect-[3/4]',
        alt: 'Joueur de volleyball en plein saut frappant le ballon au-dessus du filet en extérieur',
    },
    {
        src: 'https://horizons-cdn.hostinger.com/9d064160-0699-45ef-a183-310baec5c368/portfolio-photo-3-ODAa7.jpg',
        title: 'Dos au pont',
        meta: 'Assise sur le rocher, elle regarde le pont turquoise et la verdure.',
        aspect: 'aspect-[4/3]',
        alt: 'Jeune femme de dos en robe fleurie assise près de la rivière face à un pont bleu',
    },
    {
        src: 'https://horizons-cdn.hostinger.com/9d064160-0699-45ef-a183-310baec5c368/ballon-proche-seul-t7MSQ.JPG',
        title: 'Seul sur le sable',
        meta: 'Ballon Wilson jaune et noir posé au milieu d’un terrain de beach.',
        aspect: 'aspect-[4/3]',
        alt: 'Ballon de volleyball Wilson jaune et noir isolé sur le sable d’un terrain de plage',
    },
];

const PortfolioPage = () => (
    <>
        <Helmet>
            <title>Portfolio — Smash Photographie | Galerie photo</title>
            <meta
                name="description"
                content="Galerie Smash Photographie : détails auto, portraits en nature, flore et instants sport — neuf pièces choisies, figées en HD."
            />
        </Helmet>

        <section className="portfolio-stage relative isolate overflow-hidden pb-16 pt-28 md:pb-32 md:pt-44">
            <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
                <div className="flex flex-wrap items-end justify-between gap-8">
                    <Reveal>
                        <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
                            <span className="inline-block h-2 w-2 bg-flash" />
                            Archives — Saison en cours
                        </p>
                        <h1 className="mt-5 font-display text-[2.6rem] font-medium leading-[1.05] md:text-7xl md:leading-[1.02]">
                            Le <em className="text-misreg text-flash">portfolio.</em>
                        </h1>
                        <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
                            Neuf pièces choisies parmi de nombreux déclenchements. Chaque
                            photo capture l'instant décisif — figé en HD.
                        </p>
                    </Reveal>
                    {/* Hors-grille */}
                    <Reveal delay={0.2}>
                        <p className="rotate-2 border border-border bg-card px-4 py-3 font-mono text-[10px] uppercase leading-relaxed tracking-[0.2em] text-muted-foreground">
                            Survol = zoom léger
                            <br />
                            <span className="text-primary">09 exhibits</span>{' '}
                            <span className="text-flash">/ 01 saison</span>
                        </p>
                    </Reveal>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {EXHIBITS.map((exhibit, i) => (
                        <Reveal
                            key={exhibit.title}
                            delay={(i % 3) * 0.1}
                            className={cn(
                                // Collage contrôlé : la colonne du milieu est décalée
                                i % 3 === 1 && 'lg:translate-y-10',
                                // Signature hors-grille : une pièce légèrement pivotée
                                i === 4 && 'lg:-rotate-1',
                            )}
                        >
                            <figure className="group relative border border-border bg-card transition-transform duration-300 hover:-translate-y-1.5">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={exhibit.src}
                                        alt={exhibit.alt}
                                        loading="lazy"
                                        className={cn(
                                            'w-full transition-transform duration-500 ease-out group-hover:scale-[1.05]',
                                            exhibit.fit || 'object-cover',
                                            exhibit.aspect,
                                        )}
                                    />
                                    <div
                                        aria-hidden="true"
                                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                    />
                                    {/* Repères de cadrage au survol */}
                                    <span
                                        aria-hidden="true"
                                        className="absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-flash opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                    />
                                    <span
                                        aria-hidden="true"
                                        className="absolute right-3 top-3 h-4 w-4 border-r-2 border-t-2 border-flash opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                    />
                                    <span
                                        aria-hidden="true"
                                        className="absolute bottom-3 left-3 h-4 w-4 border-b-2 border-l-2 border-flash opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                    />
                                    <span
                                        aria-hidden="true"
                                        className="absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-flash opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                    />
                                </div>
                                <figcaption className="border-t border-border px-4 py-3">
                                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                                        <span className="text-primary">
                                            EXH.{String(i + 1).padStart(2, '0')}
                                        </span>{' '}
                                        — {exhibit.title}
                                    </p>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground/85">
                                        {exhibit.meta}
                                    </p>
                                </figcaption>
                            </figure>
                        </Reveal>
                    ))}
                </div>

                <Reveal className="mt-16 border border-border bg-card p-8 md:mt-24 md:p-12">
                    <div className="flex flex-wrap items-center justify-between gap-8">
                        <div>
                            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
                                Prochaine pièce de la collection
                            </p>
                            <h2 className="mt-3 max-w-xl font-display text-3xl font-medium italic leading-tight md:text-4xl">
                                Ton équipe mérite sa place dans la galerie.
                            </h2>
                        </div>
                        <Link
                            to="/#reservation"
                            className="cta-shine inline-flex min-h-[48px] items-center gap-2 px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition-transform duration-200 active:scale-[0.98]"
                        >
                            Réserve ta séance
                            <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                        </Link>
                    </div>
                </Reveal>
            </div>
        </section>
    </>
);

export default PortfolioPage;
