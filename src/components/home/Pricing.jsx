import React, { useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowUpRight, Signal, Wifi, BatteryFull } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { cn } from '@/lib/utils';

const PLANS = [
    {
        name: 'Le Match Simple',
        tag: 'Un match, une histoire',
        features: [
            'Couverture complète du match',
            'Photos HD retouchées',
            'Galerie en ligne pour toute l’équipe',
            'Livraison en 3–5 jours',
        ],
        featured: false,
        accent: 'primary',
    },
    {
        name: 'Le Tournoi',
        tag: 'Le plus demandé',
        features: [
            'Tous les matchs du tournoi',
            'Photos d’équipe officielles',
            'Priorité sur les retouches',
            'Livraison en 7–10 jours',
        ],
        featured: true,
        accent: 'flash',
    },
    {
        name: 'Fin de semaine',
        tag: 'Immersion totale',
        features: [
            'Présence tout le weekend',
            'Action + coulisses (backstage)',
            'Clé USB avec tous les clichés',
            'Livraison en 7–10 jours',
        ],
        featured: false,
        accent: 'primary',
    },
];

const PhoneCard = ({ plan, index }) => {
    const ref = useRef(null);
    const [style, setStyle] = useState({ transform: 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0)', glowX: '50%', glowY: '50%' });
    const [hovered, setHovered] = useState(false);

    const handleMove = useCallback((e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width; // 0..1
        const py = (e.clientY - rect.top) / rect.height; // 0..1
        const rotateY = (px - 0.5) * 12; // -6..6 deg
        const rotateX = -(py - 0.5) * 12;
        setStyle({
            transform: `perspective(1200px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(0) translateY(-6px) scale(1.02)`,
            glowX: `${(px * 100).toFixed(1)}%`,
            glowY: `${(py * 100).toFixed(1)}%`,
        });
    }, []);

    const handleLeave = useCallback(() => {
        setHovered(false);
        setStyle({
            transform: 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0)',
            glowX: '50%',
            glowY: '50%',
        });
    }, []);

    const isFlash = plan.accent === 'flash';

    return (
        <Reveal delay={index * 0.12} className="h-full">
            <div
                ref={ref}
                onMouseMove={handleMove}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={handleLeave}
                style={{ transform: style.transform, '--glow-x': style.glowX, '--glow-y': style.glowY }}
                className={cn(
                    'phone-card group relative mx-auto h-full w-full max-w-[330px] will-change-transform',
                    'rounded-[2.6rem] p-[3px] transition-transform duration-200 ease-out',
                    'bg-gradient-to-b from-zinc-700/80 via-zinc-900 to-black',
                    'shadow-[0_18px_40px_-12px_rgba(0,0,0,0.7)]',
                    hovered && (isFlash ? 'phone-glow-flash' : 'phone-glow-primary'),
                )}
            >
                {/* Châssis métallique : fine bordure */}
                <div className="relative h-full overflow-hidden rounded-[2.45rem] border border-white/10 bg-black p-[2px]">
                    {/* Écran */}
                    <div
                        className={cn(
                            'relative flex h-full flex-col overflow-hidden rounded-[2.3rem] px-6 pb-7 pt-3',
                            isFlash
                                ? 'bg-[radial-gradient(120%_80%_at_50%_0%,hsl(var(--flash)/0.10),transparent_55%),linear-gradient(160deg,hsl(224_22%_7%)_0%,hsl(224_22%_4%)_100%)]'
                                : 'bg-[radial-gradient(120%_80%_at_50%_0%,hsl(var(--primary)/0.12),transparent_55%),linear-gradient(160deg,hsl(224_22%_7%)_0%,hsl(224_22%_4%)_100%)]',
                        )}
                    >
                        {/* Encoche / Dynamic Island */}
                        <div className="absolute left-1/2 top-2 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />

                        {/* Status bar façon iOS */}
                        <div className="flex items-center justify-between px-2 pt-1.5 font-mono text-[10px] text-foreground/70">
                            <span>9:41</span>
                            <div className="flex items-center gap-1.5">
                                <Signal className="h-3 w-3" strokeWidth={2} />
                                <Wifi className="h-3 w-3" strokeWidth={2} />
                                <BatteryFull className="h-3.5 w-3.5" strokeWidth={1.75} />
                            </div>
                        </div>

                        {/* Badge forfait mis en avant */}
                        {plan.featured && (
                            <span className="z-10 mx-auto mt-3 -rotate-1 border border-flash bg-background/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-flash backdrop-blur">
                                {plan.tag}
                            </span>
                        )}

                        {/* Contenu écran */}
                        <div className="mt-4 flex flex-1 flex-col">
                            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                                Forfait 0{index + 1}
                            </p>
                            <h3 className="mt-2 font-display text-2xl font-medium italic leading-tight">
                                {plan.name}
                            </h3>

                            <p className="mt-4 flex items-baseline gap-2">
                                <span className={cn('font-display text-xl', isFlash ? 'text-flash' : 'text-primary')}>
                                    Prix à discuter
                                </span>
                            </p>
                            <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                                Devis gratuit · sans engagement
                            </p>

                            <ul className="mt-5 flex flex-1 flex-col gap-2.5 border-t border-white/10 pt-5">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-2.5 text-[13px] leading-snug">
                                        <Check
                                            className={cn(
                                                'mt-0.5 h-3.5 w-3.5 shrink-0',
                                                isFlash ? 'text-flash' : 'text-primary',
                                            )}
                                            strokeWidth={2}
                                        />
                                        <span className="text-foreground/85">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                to="/#reservation"
                                className={cn(
                                    'mt-6 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] transition-transform duration-200 active:scale-[0.98]',
                                    isFlash
                                        ? 'cta-shine text-primary-foreground'
                                        : 'border border-white/15 text-foreground hover:border-flash hover:text-flash',
                                )}
                            >
                                Demander ce forfait
                                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                            </Link>
                        </div>

                        {/* Home indicator */}
                        <div className="mx-auto mt-4 h-1 w-28 rounded-full bg-white/25" />
                    </div>
                </div>
            </div>
        </Reveal>
    );
};

const Pricing = () => (
    <section id="tarifs" className="relative border-t border-border py-16 md:py-32">
        <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-[120px]"
        />
        <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="flex flex-wrap items-end justify-between gap-6">
                <SectionHeading
                    index="02"
                    kicker="Tarifs & forfaits"
                    title={
                        <>
                            Des forfaits pensés
                            <br />
                            pour <em className="text-flash">le terrain.</em>
                        </>
                    }
                />
                <Reveal delay={0.15}>
                    <p className="max-w-xs border-l-2 border-primary pl-4 text-sm leading-relaxed text-muted-foreground">
                        Les prix sont à discuter selon l'événement, la distance et la durée.
                        Écris-moi — devis en 24–48 h.
                    </p>
                </Reveal>
            </div>

            <div className="mt-12 grid items-stretch gap-8 md:mt-16 sm:grid-cols-2 lg:grid-cols-3">
                {PLANS.map((plan, i) => (
                    <PhoneCard key={plan.name} plan={plan} index={i} />
                ))}
            </div>
        </div>
    </section>
);

export default Pricing;
