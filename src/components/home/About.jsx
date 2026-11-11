import React from 'react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

const PORTRAIT_IMG = 'https://horizons-cdn.hostinger.com/9d064160-0699-45ef-a183-310baec5c368/461499a7de87fe208820d7f0e849446f.jpg';

const About = () => (
    <section id="a-propos" className="relative overflow-hidden border-t border-border py-16 md:py-32">
        <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-flash/[0.07] blur-[120px]"
        />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:gap-14 md:px-8 lg:grid-cols-12">
            {/* Portrait façon exhibit */}
            <Reveal className="order-2 lg:order-none lg:col-span-5">
                <div className="relative mx-auto max-w-md">
                    <div
                        aria-hidden="true"
                        className="absolute -inset-0 translate-x-3 translate-y-3 border border-flash/50"
                    />
                    <figure className="relative border border-border bg-card">
                        <img
                            src={PORTRAIT_IMG}
                            alt="Samuel, photographe, accroupi au bord du terrain avec son téléobjectif pendant un match"
                            className="aspect-[3/4] w-full object-cover"
                            loading="lazy"
                        />
                        <figcaption className="flex items-center justify-between border-t border-border px-4 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                            <span>
                                <span className="text-primary">Sujet</span> — Samuel
                            </span>
                            <span>Rôle — Photographe</span>
                        </figcaption>
                    </figure>
                    {/* Hors-grille */}
                    <div className="absolute right-0 top-8 rotate-6 border border-primary bg-background/90 px-3 py-2 backdrop-blur-sm sm:-right-8">
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                            Dispo — Québec
                            <br />
                            <span className="text-foreground">+ déplacements</span>
                        </p>
                    </div>
                </div>
            </Reveal>

            <div className="contents lg:col-span-7 lg:block lg:pl-6">
                <div className="order-1 lg:order-none">
                    <SectionHeading
                        index="03"
                        kicker="À propos"
                        title={
                            <>
                                Derrière la lentille,
                                <br />
                                <em className="text-primary">un passionné du filet.</em>
                            </>
                        }
                    />
                </div>
                <Reveal className="order-3 lg:order-none" delay={0.15}>
                    <div className="mt-8 max-w-xl space-y-5 text-base leading-relaxed text-muted-foreground">
                        <p>
                            Moi, c'est <span className="text-foreground">Samuel</span>. Passionné de
                            photographie sous toutes ses formes, je cherche autant la personnalité
                            d'un portrait que l'énergie d'un événement. Au fil des projets, j'ai
                            développé une expertise dans la couverture d'événements sportifs variés —
                            du volleyball à d'autres disciplines — où l'anticipation fait toute la différence.
                        </p>
                        <p>
                            Ce que je chasse : l'<span className="text-flash">énergie brute</span>{' '}
                            et les <span className="text-flash">émotions</span> qui donnent vie à chaque
                            projet. Les actions qui font vibrer une salle, les moments de
                            concentration, les célébrations et la complicité qu'on ne peut pas
                            faker.
                        </p>
                        <p>
                            Mon but est simple : que chaque personne puisse revivre un événement,
                            un portrait ou un projet exactement comme elle l'a vécu.
                        </p>
                    </div>
                </Reveal>

            </div>
        </div>
    </section>
);

export default About;
