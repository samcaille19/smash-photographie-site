import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const HERO_IMG = 'https://horizons-cdn.hostinger.com/9d064160-0699-45ef-a183-310baec5c368/1f1887baf3e2072cf01f53cbca8ab608.jpg';

const fadeUp = (delay) => ({
    initial: { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: 'easeOut' },
});

const Hero = () => (
    <section className="court-lines relative flex min-h-[100dvh] items-center overflow-hidden">
        {/* Lumières d'aréna */}
        <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-40 top-1/4 h-[34rem] w-[34rem] rounded-full bg-primary/20 blur-[140px]"
        />
        <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 bottom-0 h-[26rem] w-[26rem] rounded-full bg-flash/10 blur-[130px]"
        />

        <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-5 pb-16 pt-28 md:gap-14 md:px-8 md:pb-20 md:pt-32 lg:grid-cols-12 lg:items-center lg:gap-8 lg:pt-24">
            <div className="lg:col-span-6">
                <motion.p
                    {...fadeUp(0)}
                    className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground"
                >
                    <span className="text-primary">Photographie polyvalente</span>
                    <span className="text-flash">/</span>
                    <span>Événements sportifs</span>
                    <span className="text-flash">/</span>
                    <span>Québec</span>
                </motion.p>

                <motion.h1
                    {...fadeUp(0.12)}
                    className="mt-6 font-display text-[2.6rem] font-medium leading-[1.05] sm:text-6xl sm:leading-[1.02] xl:text-7xl"
                >
                    Chaque moment,
                    <br />
                    chaque émotion,
                    <br />
                    <em className="text-misreg font-semibold text-flash">immortalisés.</em>
                </motion.h1>

                <motion.p
                    {...fadeUp(0.24)}
                    className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg"
                >
                    Je fige les instants qui comptent : un regard, une action décisive, une émotion
                    sincère ou une célébration qui rassemble. Des images HD qui racontent ton
                    événement et tout ce qui le rend unique.
                </motion.p>

                <motion.div {...fadeUp(0.36)} className="mt-9 flex flex-wrap items-center gap-4">
                    <Link
                        to="/#reservation"
                        className="cta-shine inline-flex min-h-[48px] items-center gap-2 px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition-transform duration-200 active:scale-[0.98]"
                    >
                        Réserve ta séance
                        <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                    </Link>
                    <Link
                        to="/portfolio"
                        className="group inline-flex min-h-[48px] items-center gap-2 border border-border px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-flash hover:text-flash active:scale-[0.98]"
                    >
                        Voir le portfolio
                        <ArrowRight
                            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                            strokeWidth={1.75}
                        />
                    </Link>
                </motion.div>

                <motion.div
                    {...fadeUp(0.48)}
                    className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                >
                    <span>
                        <span className="text-flash">15–100+</span> photos HD
                    </span>
                    <span>
                        Galerie <span className="text-primary">en ligne</span>
                    </span>
                    <span>
                        Livraison <span className="text-flash">3–10 j</span>
                    </span>
                </motion.div>
            </div>

            {/* Photo d'action façon planche d'exposition */}
            <motion.div
                initial={{ opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
                className="relative lg:col-span-6"
            >
                <div className="relative ml-auto max-w-xl">
                    {/* Cadre décalé — mauvais calage d'impression voulu */}
                    <div
                        aria-hidden="true"
                        className="absolute -inset-0 translate-x-3 translate-y-3 border border-primary/60"
                    />
                    <div
                        aria-hidden="true"
                        className="absolute -inset-0 -translate-x-2 -translate-y-2 border border-flash/40"
                    />

                    <figure className="relative z-[61] border border-border bg-card">
                        <div className="relative overflow-hidden">
                            <img
                                src={HERO_IMG}
                                alt="Joueur de volleyball en plein smash au-dessus du filet, éclairage bleu et jaune d'aréna"
                                className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
                                loading="eager"
                            />
                        </div>
                        <figcaption className="flex items-center justify-between border-t border-border px-4 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                            <span>
                                <span className="text-primary">EXH.001</span> — L'action
                            </span>
                            <span>1/1000 s · f/2.8</span>
                        </figcaption>
                    </figure>

                    {/* Élément hors-grille : macaron rotatif */}
                    <div className="absolute left-0 -top-6 z-[62] rotate-[-8deg] border border-flash bg-background/90 px-4 py-2.5 backdrop-blur-sm sm:-left-10">
                        <p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.22em] text-flash">
                            Québec
                            <br />
                            <span className="text-foreground">Sport · HD</span>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
);

export default Hero;
