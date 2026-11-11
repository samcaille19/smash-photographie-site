import React, { useState } from 'react';
import pb from '@/lib/pocketbaseClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { CheckCircle2, Loader2, Send } from 'lucide-react';

const INITIAL_FORM = {
    nom: '',
    email: '',
    telephone: '',
    type_evenement: '',
    date_evenement: '',
    lieu: '',
    forfait: '',
    message: '',
};

const BookingForm = () => {
    const [form, setForm] = useState(INITIAL_FORM);
    const [status, setStatus] = useState('idle'); // idle | sending | success | error

    const set = (field) => (e) => {
        const value = e?.target ? e.target.value : e;
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            await pb.collection('reservations').create({
                nom: form.nom.trim(),
                email: form.email.trim(),
                telephone: form.telephone.trim(),
                type_evenement: form.type_evenement,
                date_evenement: form.date_evenement,
                lieu: form.lieu.trim(),
                forfait: form.forfait || 'a_discuter',
                message: form.message.trim(),
            });
            setStatus('success');
        } catch (err) {
            console.error('Reservation failed', err);
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="flex h-full min-h-[420px] flex-col items-center justify-center border border-primary/40 bg-primary/10 p-8 text-center">
                <CheckCircle2 className="h-12 w-12 text-flash" strokeWidth={1.25} />
                <h3 className="mt-6 font-display text-3xl italic">Demande envoyée</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    Merci {form.nom.split(' ')[0]} — ta demande est bien reçue. Je te réponds en
                    24 à 48 h avec un devis et les prochaines étapes.
                </p>
                <button
                    type="button"
                    onClick={() => {
                        setForm(INITIAL_FORM);
                        setStatus('idle');
                    }}
                    className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-primary underline-offset-4 hover:underline"
                >
                    Faire une autre demande
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="border border-border bg-card p-6 md:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                    <Label htmlFor="nom" className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        Nom complet *
                    </Label>
                    <Input
                        id="nom"
                        required
                        value={form.nom}
                        onChange={set('nom')}
                        placeholder="Ton nom"
                        className="h-11 rounded-none border-input bg-transparent focus-visible:ring-primary"
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="email" className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        Courriel *
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={set('email')}
                        placeholder="toi@exemple.ca"
                        className="h-11 rounded-none border-input bg-transparent focus-visible:ring-primary"
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="telephone" className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        Téléphone
                    </Label>
                    <Input
                        id="telephone"
                        type="tel"
                        value={form.telephone}
                        onChange={set('telephone')}
                        placeholder="418 555 1234"
                        className="h-11 rounded-none border-input bg-transparent focus-visible:ring-primary"
                    />
                </div>
                <div className="grid gap-2">
                    <Label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        Type d'événement *
                    </Label>
                    <Select required value={form.type_evenement} onValueChange={set('type_evenement')}>
                        <SelectTrigger className="h-11 rounded-none border-input bg-transparent">
                            <SelectValue placeholder="Choisir…" />
                        </SelectTrigger>
                        <SelectContent className="rounded-none border-border bg-popover">
                            <SelectItem value="match">Match simple</SelectItem>
                            <SelectItem value="tournoi">Tournoi</SelectItem>
                            <SelectItem value="fin_de_semaine">Fin de semaine</SelectItem>
                            <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="date" className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        Date de l'événement
                    </Label>
                    <Input
                        id="date"
                        type="date"
                        value={form.date_evenement}
                        onChange={set('date_evenement')}
                        className="h-11 rounded-none border-input bg-transparent [color-scheme:dark] focus-visible:ring-primary"
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="lieu" className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        Lieu
                    </Label>
                    <Input
                        id="lieu"
                        value={form.lieu}
                        onChange={set('lieu')}
                        placeholder="Gymnase, ville"
                        className="h-11 rounded-none border-input bg-transparent focus-visible:ring-primary"
                    />
                </div>
                <div className="grid gap-2 sm:col-span-2">
                    <Label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        Forfait visé
                    </Label>
                    <Select value={form.forfait} onValueChange={set('forfait')}>
                        <SelectTrigger className="h-11 rounded-none border-input bg-transparent">
                            <SelectValue placeholder="À discuter" />
                        </SelectTrigger>
                        <SelectContent className="rounded-none border-border bg-popover">
                            <SelectItem value="match_simple">Le Match Simple</SelectItem>
                            <SelectItem value="tournoi">Le Tournoi</SelectItem>
                            <SelectItem value="fin_de_semaine">Fin de semaine</SelectItem>
                            <SelectItem value="a_discuter">À discuter</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid gap-2 sm:col-span-2">
                    <Label htmlFor="message" className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        Message
                    </Label>
                    <Textarea
                        id="message"
                        rows={4}
                        value={form.message}
                        onChange={set('message')}
                        placeholder="Parle-moi de ton équipe, du niveau de jeu, de ce que tu veux revivre en photos…"
                        className="rounded-none border-input bg-transparent focus-visible:ring-primary"
                    />
                </div>
            </div>

            {status === 'error' && (
                <p className="mt-4 border border-destructive/50 bg-destructive/10 px-4 py-3 text-sm text-red-300">
                    Une erreur est survenue. Réessaie, ou écris-moi directement à
                    smashphotographie@gmail.com.
                </p>
            )}

            <Button
                type="submit"
                disabled={status === 'sending'}
                className="mt-6 h-12 w-full rounded-none bg-primary font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition-transform duration-150 hover:bg-primary/90 active:scale-[0.98]"
            >
                {status === 'sending' ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Envoi en cours…
                    </>
                ) : (
                    <>
                        <Send className="mr-2 h-4 w-4" strokeWidth={1.75} />
                        Envoyer ma demande
                    </>
                )}
            </Button>
            <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Réponse garantie en 24–48 h
            </p>
        </form>
    );
};

export default BookingForm;
