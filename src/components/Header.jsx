import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ArrowUpRight } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
    { label: 'Accueil', to: '/' },
    { label: 'Comment ça marche', to: '/#comment-ca-marche' },
    { label: 'Tarifs', to: '/#tarifs' },
    { label: 'À propos', to: '/#a-propos' },
    { label: 'FAQ', to: '/#faq' },
    { label: 'Portfolio', to: '/portfolio' },
];

const Brand = () => (
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
);

const Header = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const isActive = (to) => to === '/portfolio' && location.pathname === '/portfolio';

    return (
        <header
            className={cn(
                'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300',
                scrolled
                    ? 'border-border bg-background/85 backdrop-blur-md'
                    : 'border-transparent bg-transparent',
            )}
        >
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:h-24 md:px-8">
                <Brand />

                <nav className="hidden items-center gap-7 lg:flex">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.label}
                            to={link.to}
                            className={cn(
                                'font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-200 hover:text-flash',
                                isActive(link.to) ? 'text-flash' : 'text-foreground/75',
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <Link
                        to="/#reservation"
                        className="cta-shine hidden items-center gap-1.5 px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-primary-foreground transition-transform duration-200 sm:inline-flex"
                    >
                        Réserve ta séance
                        <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                    </Link>

                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger
                            className="inline-flex h-11 w-11 items-center justify-center border border-border text-foreground lg:hidden"
                            aria-label="Ouvrir le menu"
                        >
                            <Menu className="h-5 w-5" strokeWidth={1.5} />
                        </SheetTrigger>
                        <SheetContent
                            side="right"
                            className="w-[85vw] border-l-border bg-background p-0 sm:max-w-sm"
                        >
                            <div className="flex h-full flex-col px-7 pb-8 pt-20">
                                <nav className="flex flex-col">
                                    {NAV_LINKS.map((link, i) => (
                                        <Link
                                            key={link.label}
                                            to={link.to}
                                            onClick={() => setOpen(false)}
                                            className="group flex items-baseline gap-4 border-b border-border py-4"
                                        >
                                            <span className="font-mono text-[10px] text-primary">
                                                0{i + 1}
                                            </span>
                                            <span className="font-display text-2xl italic text-foreground transition-colors group-hover:text-flash">
                                                {link.label}
                                            </span>
                                        </Link>
                                    ))}
                                </nav>
                                <Link
                                    to="/#reservation"
                                    onClick={() => setOpen(false)}
                                    className="cta-shine mt-8 inline-flex min-h-[44px] items-center justify-center gap-2 px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-primary-foreground"
                                >
                                    Réserve ta séance
                                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                                </Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

export default Header;
