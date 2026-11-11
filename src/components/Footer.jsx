import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-background">
            <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:gap-10 md:py-14 md:grid-cols-3 md:px-8">
                <div>
                    <Link
                        to="/"
                        className="group flex h-16 min-w-0 max-w-[15rem] items-center sm:h-20 sm:max-w-[24rem] md:max-w-[28rem]"
                        aria-label="Smash Photographie — accueil"
                    >
                        <img
                            src="https://horizons-cdn.hostinger.com/9d064160-0699-45ef-a183-310baec5c368/5b839a59a26b6da6e609da7c012d7232.png"
                            alt="Logo Smash Photographie"
                            className="h-full w-auto max-w-full max-h-16 object-contain object-left transition-transform duration-200 group-hover:scale-[1.03] sm:max-h-20"
                        />
                    </Link>
                    <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
                        Photographie sportive de volleyball au Québec. Chaque smash, chaque émotion,
                        immortalisés.
                    </p>
                </div>

                <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-primary">
                        Navigation
                    </p>
                    <nav className="mt-4 flex flex-col gap-2.5 text-sm">
                        <Link to="/" className="text-muted-foreground transition-colors hover:text-flash">
                            Accueil
                        </Link>
                        <Link to="/#tarifs" className="text-muted-foreground transition-colors hover:text-flash">
                            Tarifs &amp; forfaits
                        </Link>
                        <Link to="/portfolio" className="text-muted-foreground transition-colors hover:text-flash">
                            Portfolio
                        </Link>
                        <Link to="/#reservation" className="text-muted-foreground transition-colors hover:text-flash">
                            Réserver
                        </Link>
                    </nav>
                </div>

                <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-primary">
                        Contact
                    </p>
                    <div className="mt-4 flex flex-col gap-2.5 text-sm text-muted-foreground">
                        <a
                            href="mailto:smashphotographie@gmail.com"
                            className="inline-flex items-center gap-2 transition-colors hover:text-flash"
                        >
                            <Mail className="h-4 w-4" strokeWidth={1.5} />
                            smashphotographie@gmail.com
                        </a>
                        <span className="inline-flex items-center gap-2">
                            <MapPin className="h-4 w-4" strokeWidth={1.5} />
                            Québec — déplacements partout en province
                        </span>
                    </div>
                </div>
            </div>

            <div className="border-t border-border">
                <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70 sm:flex-row sm:items-center sm:justify-between md:px-8">
                    <span>© {year} Smash Photographie</span>
                    <span>
                        Terrain couvert <span className="text-primary">/</span> émotions livrées{' '}
                        <span className="text-flash">/</span> HD garantie
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
