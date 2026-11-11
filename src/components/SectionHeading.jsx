import React from 'react';
import Reveal from '@/components/Reveal';
import { cn } from '@/lib/utils';

const SectionHeading = ({ index, kicker, title, className }) => (
    <Reveal className={cn('max-w-3xl', className)}>
        <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
            <span className="inline-block h-2 w-2 bg-flash" />
            {index} — {kicker}
        </p>
        <h2 className="mt-4 font-display text-[2rem] font-medium leading-[1.08] md:text-5xl md:leading-[1.05]">
            {title}
        </h2>
    </Reveal>
);

export default SectionHeading;
