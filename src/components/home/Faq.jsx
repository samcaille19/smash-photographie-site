import React from 'react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ_ITEMS = [
    {
        q: 'Combien de photos est-ce que je reçois ?',
        a: "Entre 15 et 100+ photos HD selon le forfait choisi. Un match simple livre généralement 15 à 40 photos retouchées, tandis qu'un tournoi ou une fin de semaine complète peut facilement dépasser la centaine.",
    },
    {
        q: 'Quel est le délai de livraison ?',
        a: 'Compte 3 à 5 jours pour un match simple, et 7 à 10 jours pour un tournoi ou une fin de semaine. Le forfait Tournoi inclut la priorité sur les retouches.',
    },
    {
        q: 'Quelle zone géographique couvres-tu ?',
        a: "Je suis basé au Québec et je me déplace partout en province. Des frais de déplacement peuvent s'appliquer selon la distance — on en discute au moment du devis, sans surprise.",
    },
    {
        q: "Quels sont les droits d'usage sur les photos ?",
        a: "L'usage personnel et promotionnel (réseaux sociaux, site de l'équipe, recrutement) est inclus dans tous les forfaits. Pour un usage commercial (publicité, revente, commandites), on signe une entente séparée.",
    },
    {
        q: 'Comment réserver ma séance ?',
        a: "Remplis le formulaire de réservation avec la date, le lieu et le type d'événement. Je te réponds en 24 à 48 h avec un devis et ma disponibilité. Ta date est confirmée dès qu'on s'entend.",
    },
];

const Faq = () => (
    <section id="faq" className="border-t border-border py-16 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:gap-12 md:px-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
                <SectionHeading
                    index="04"
                    kicker="FAQ"
                    title={
                        <>
                            Les questions
                            <br />
                            qu'on me pose <em className="text-flash">souvent.</em>
                        </>
                    }
                />
                <Reveal delay={0.15}>
                    <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted-foreground">
                        Une autre question ? Écris-moi via le formulaire de réservation — je
                        réponds à tout, même aux demandes weird de dernière minute.
                    </p>
                </Reveal>
            </div>

            <Reveal delay={0.1} className="lg:col-span-7">
                <Accordion type="single" collapsible className="w-full">
                    {FAQ_ITEMS.map((item, i) => (
                        <AccordionItem
                            key={item.q}
                            value={`item-${i}`}
                            className="border-border"
                        >
                            <AccordionTrigger className="group py-6 text-left hover:no-underline">
                                <span className="flex items-baseline gap-4">
                                    <span className="font-mono text-[10px] text-primary">
                                        Q{i + 1}
                                    </span>
                                    <span className="font-display text-xl font-medium italic transition-colors group-hover:text-flash md:text-2xl">
                                        {item.q}
                                    </span>
                                </span>
                            </AccordionTrigger>
                            <AccordionContent className="pb-6 pl-9 pr-4 text-sm leading-relaxed text-muted-foreground md:pl-10">
                                {item.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Reveal>
        </div>
    </section>
);

export default Faq;
