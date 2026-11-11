import React from 'react';
import { MessageSquare, Camera, Images } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

const STEPS = [
    {
        num: '01',
        icon: MessageSquare,
        title: 'Contacte-moi',
        text: "Envoie-moi la date, le lieu et le type d'événement via le formulaire. Je te réponds en 24–48 h avec un devis clair.",
    },
    {
        num: '02',
        icon: Camera,
        title: "Je couvre l'événement",
        text: 'Chaque action, moment intense et célébration — je capte les instants forts en haute définition, sans jamais gêner l’événement.',
    },
    {
        num: '03',
        icon: Images,
        title: 'Tu reçois ta galerie',
        text: 'Ta galerie en ligne privée, retouchée selon ton forfait, prête à partager avec toute l’équipe.',
    },
];

const HowItWorks = () => (
    <section id="comment-ca-marche" className="relative py-16 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading
                index="01"
                kicker="Comment ça marche"
                title={
                    <>
                        Trois temps.
                        <br />
                        <em className="text-primary">Zéro stress.</em>
                    </>
                }
            />

            <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3">
                {STEPS.map((step, i) => (
                    <Reveal key={step.num} delay={i * 0.12} className="h-full">
                        <article className="how-it-works-card group relative h-full bg-background p-8 transition-transform duration-300 hover:-translate-y-1.5 md:p-10">
                            <div className="flex items-start justify-between">
                                <span className="font-display text-6xl font-light italic text-primary/90 transition-colors duration-300 group-hover:text-flash">
                                    {step.num}
                                </span>
                                <span className="flex h-11 w-11 items-center justify-center border border-border text-muted-foreground transition-colors duration-300 group-hover:border-primary group-hover:text-primary">
                                    <step.icon className="h-5 w-5" strokeWidth={1.5} />
                                </span>
                            </div>
                            <h3 className="mt-8 font-display text-2xl font-medium italic">
                                {step.title}
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                {step.text}
                            </p>
                            <span
                                aria-hidden="true"
                                className="absolute bottom-0 left-0 h-0.5 w-0 bg-flash transition-all duration-300 group-hover:w-full"
                            />
                        </article>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);

export default HowItWorks;
