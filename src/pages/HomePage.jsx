import React from 'react';
import { Helmet } from 'react-helmet';
import { Mail, MapPin, Clock } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import BookingForm from '@/components/BookingForm';
import Hero from '@/components/home/Hero';
import HowItWorks from '@/components/home/HowItWorks';
import Pricing from '@/components/home/Pricing';
import About from '@/components/home/About';
import Faq from '@/components/home/Faq';

const HomePage = () => (
    <>
        <Helmet>
            <title>Smash Photographie — Photographie sportive de volleyball au Québec</title>
            <meta
                name="description"
                content="Photographe de volleyball au Québec. Smashs, plongeons et émotions du terrain immortalisés en HD. Forfaits match, tournoi et fin de semaine — réserve ta séance."
            />
        </Helmet>

        <Hero />
        <HowItWorks />
        <Pricing />
        <About />
        <Faq />

        {/* Réservation */}
        <section
            id="reservation"
            className="relative overflow-hidden border-t border-border py-16 md:py-32"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-primary/15 blur-[140px]"
            />
            <div className="mx-auto grid max-w-7xl gap-10 px-5 md:gap-14 md:px-8 lg:grid-cols-12">
                <div className="lg:col-span-5">
                    <SectionHeading
                        index="05"
                        kicker="Réservation"
                        title={
                            <>
                                Ton prochain match
                                <br />
                                mérite <em className="text-misreg text-flash">d'être figé.</em>
                            </>
                        }
                    />
                    <Reveal delay={0.15}>
                        <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
                            Dis-moi quand, où et quel type d'événement — je m'occupe du reste.
                            Devis clair, réponse rapide, et des photos dont ton équipe se
                            souviendra.
                        </p>
                        <ul className="mt-10 flex flex-col gap-5">
                            <li className="flex items-center gap-4">
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-border text-primary">
                                    <Clock className="h-5 w-5" strokeWidth={1.5} />
                                </span>
                                <div>
                                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                                        Réponse
                                    </p>
                                    <p className="text-sm text-foreground">En 24 à 48 heures</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-border text-primary">
                                    <MapPin className="h-5 w-5" strokeWidth={1.5} />
                                </span>
                                <div>
                                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                                        Zone couverte
                                    </p>
                                    <p className="text-sm text-foreground">
                                        Partout au Québec + déplacements
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-border text-primary">
                                    <Mail className="h-5 w-5" strokeWidth={1.5} />
                                </span>
                                <div>
                                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                                        Courriel direct
                                    </p>
                                    <a
                                        href="mailto:smashphotographie@gmail.com"
                                        className="text-sm text-foreground transition-colors hover:text-flash"
                                    >
                                        smashphotographie@gmail.com
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </Reveal>
                </div>

                <Reveal delay={0.2} className="lg:col-span-7">
                    <BookingForm />
                </Reveal>
            </div>
        </section>
    </>
);

export default HomePage;
